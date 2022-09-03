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
            minPrice: UInt,
            lengthInBlocks: UInt
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
        const { minPrice, lengthInBlocks } = declassify(interact.startAuction());
    });


    Auctioneer.publish(minPrice, lengthInBlocks);
    const nftAmt = 1;
    commit();

    Owner.pay([[nftAmt, nftId]]);
    assert(balance(nftId) == nftAmt, "balance of NFT is wrong");
    const [timeRemaining, keepGoing] = makeDeadline(lengthInBlocks);

    var [highestBidder, lastPrice, isFirstBid] = [Auctioneer, minPrice, true];

    invariant(balance(nftId) == nftAmt);
    invariant(balance() == (isFirstBid ? 0 : lastPrice));

    while (keepGoing()) {
        commit();
        fork()
            .api_(Bidder.bid,
                (bid) => {
                    check(bid > lastPrice, "bid is too low");

                    return [bid, (notify) => {
                        notify([highestBidder, lastPrice]);

                        if (!isFirstBid) {
                            transfer(lastPrice).to(highestBidder)
                        }

                        each([Owner, Auctioneer], () => {
                            interact.seeBid(this, bid);
                        });

                        [highestBidder, lastPrice, isFirstBid] = [this, bid, false];


                    }];
                }
            );

        continue;
    }

    commit();
    Owner.publish();

    transfer(nftAmt, nftId).to(highestBidder);

    const auctioneerFee = div(mul(lastPrice, 1), 100);
    const ownerMoney = sub(lastPrice, auctioneerFee);

    if (!isFirstBid) {
        transfer(ownerMoney).to(Owner);
        transfer(auctioneerFee).to(Auctioneer);
    }

    each([Auctioneer, Owner], () => {
        interact.showOutcome(highestBidder, lastPrice);
    });
    commit();
    exit();

});