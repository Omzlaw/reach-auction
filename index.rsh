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

    Auctioneer.only(() => {
        const { minBid } = declassify(interact.setMinBid());
    });

    Auctioneer.publish(minimumAmount, lengthInBlocks, minBid);
    const amt = minimumAmount;
    commit();

    Owner.pay([[amt, nftId]]);
    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const end = lastConsensusTime() + lengthInBlocks;
    const [
        highestBidder,
        lastPrice,
        isFirstBid,
    ] = parallelReduce([Auctioneer, minBid, true])
        .invariant(balance(nftId) == amt)
        .invariant(balance() == (isFirstBid ? 0 : lastPrice))
        .while(lastConsensusTime() <= end)
        .api_(Bidder.bid, (bid) => {
            check(bid > lastPrice, "bid is too low");

            return [bid, (notify) => {
                notify([highestBidder, lastPrice])
                if (!isFirstBid) {
                    transfer(lastPrice).to(highestBidder)
                }

                const who = this;
                each([Auctioneer, Owner], () => {
                    interact.seeBid(who, bid);
                });
                
                return [who, bid, false];
            }];
        })
        .timeout(absoluteTime(end), () => {
            Auctioneer.publish();
            return [highestBidder, lastPrice, isFirstBid];
        });

    transfer(amt, nftId).to(highestBidder)

    if (!isFirstBid) {
        transfer(lastPrice).to(Owner);
    }

    each([Auctioneer, Owner], () => {
        interact.showOutcome(highestBidder, lastPrice);
    });
    commit();
    exit();

});