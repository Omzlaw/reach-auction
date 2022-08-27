'reach 0.1'

const ICreator = {
    getSale: Fun([], Object({
        nftId: Token,
        minimumBid: UInt,
        lengthInBlocks: UInt
    })),
    auctionReady: Fun([], Null),
    seeBid: Fun([Address, UInt], Null),
    showOutcome: Fun([Address, UInt], Null)
}

const IBidder = {
    bid: Fun([UInt], Tuple(Address, UInt))
}

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        ...ICreator
    });

    const Bidder = API('Bidder', {
        ...IBidder
    })

    init();

    Creator.only(() => {
        const { nftId, minimumBid, lengthInBlocks } = declassify(interact.getSale());
    });

    Creator.publish(nftId, minimumBid, lengthInBlocks);
    const amt = 1;
    commit();

    Creator.pay([[amt, nftId]]);
    Creator.interact.auctionReady();
    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const end = lastConsensusTime() + lengthInBlocks;
    const [
        highestBidder,
        lastPrice,
        isFirstBid,
    ] = parallelReduce([Creator, minimumBid, true])
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
                Creator.interact.seeBid(who, bid);
                return [who, bid, false]
            }];
        })
        // .api_(Bidder.lastBid, () => {
        //     return [lastPrice];
        // })
        .timeout(absoluteTime(end), () => {
            Creator.publish();
            return [highestBidder, lastPrice, isFirstBid];
        });

    transfer(amt, nftId).to(highestBidder)

    if (!isFirstBid) {
        transfer(lastPrice).to(Creator);
    }

    Creator.interact.showOutcome(highestBidder, lastPrice);
    commit();
    exit();

});