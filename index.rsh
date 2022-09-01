'reach 0.1'

export const main = Reach.App(() => {

    const Owner = Participant('Owner', {
        setNFT: Fun([], Object({
            nftId: Token
        })),
        seeBid: Fun([Address, UInt], Null),
        showOutcome: Fun([Address, UInt], Null)
    });

    const Auctioneer = Participant('Auctioneer', {
        startAuction: Fun([], Object({
            minimumAmount: UInt,
            lengthInBlocks: UInt
        })),
        setMinBid: Fun([], Object({
            minBid: UInt
        })),
        seeBid: Fun([Address, UInt], Null),
        showOutcome: Fun([Address, UInt], Null)
    });

    const Bidder = API('Bidder', {
        bid: Fun([UInt], Tuple(Address, UInt))
    })

    init();

    Owner.only(() => {
        const { nftId } = declassify(interact.setNFT());
    });

    Owner.publish(nftId);
    commit();

    Auctioneer.only(() => {
        const { minimumAmount, lengthInBlocks } = declassify(interact.startAuction());
    });


    Auctioneer.publish(minimumAmount, lengthInBlocks);
    const amt = minimumAmount;
    commit();

    Owner.pay([[amt, nftId]]);
    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const [timeRemaining, keepGoing] = makeDeadline(lengthInBlocks);

    var [highestBidder, lastPrice, isFirstBid] = [Auctioneer, minimumAmount, true];

    invariant(balance(nftId) == amt);
    invariant(balance() == (isFirstBid ? 0 : lastPrice));

    while (keepGoing()) {
        commit();
        fork()
            .api_(Bidder.bid,
                (bid) => {
                    check(bid > lastPrice, "bid is too low");

                    return [bid, (notify) => {
                        notify([highestBidder, lastPrice])
                        if (!isFirstBid) {
                            transfer(lastPrice).to(highestBidder)
                        }

                        each([Owner, Auctioneer], () => {
                            interact.seeBid(this, bid);
                        });

                    }];
                }
            )
            .timeout(timeRemaining(), () => {
                Owner.publish();
                commit();
                Auctioneer.publish();
                commit();
            });

        continue;
    }

    transfer(amt, nftId).to(highestBidder);

    if (!isFirstBid) {
        transfer(lastPrice).to(Owner);
    }

    each([Auctioneer, Owner], () => {
        interact.showOutcome(highestBidder, lastPrice);
    });
    commit();
    exit();

});