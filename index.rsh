'reach 0.1'


export const main = Reach.App(() => {

    const NFTOwner = Participant('NFTOwner', {
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
        bid: Fun([UInt], Tuple(Address, UInt)),
        seeBid: Fun([Address, UInt], Null),
        showOutcome: Fun([Address, UInt], Null)
    })

    init();

    NFTOwner.only(() => {
        const { nftId } = declassify(interact.setNFT());
    });

    NFTOwner.publish(nftId);
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

    Auctioneer.pay([[amt, nftId]]);
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
                each([Auctioneer, NFTOwner], () => {
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
        transfer(lastPrice).to(Auctioneer);
    }

    each([Auctioneer, NFTOwner], () => {
        interact.showOutcome(highestBidder, lastPrice);
    });
    commit();
    exit();

});