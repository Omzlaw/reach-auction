'reach 0.1'

const winner = (bidJane, bidJohn) => {
    var highestBidder = null;
    var lastPrice = 0;
    if (johnBid > janeBid) {
        highestBidder = John;
        lastPrice = johnBid;
    } else if (janeBid > johnBid) {
        highestBidder = Jane;
        lastPrice = janeBid;
    }

    return [highestBidder, lastPrice, false];
}

const IShared = {
    showOutcome: Fun([Address, UInt], Null),
    informTimeout: Fun([], Null),
}

const IBidder = {
    enterAuction: Fun([UInt], Null),
    bid: Fun([UInt], Tuple(Address, UInt)),
    ...IShared
}

export const main = Reach.App(() => {

    const Owner = Participant('Owner', {
        setNFT: Fun([], Object({
            nftId: Token
        })),
        seeBid: Fun([Address, UInt], Null),
        ...IShared
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
        ...IShared
    });

    const Jane = API('Jane', {
        ...IBidder
    });

    const John = API('John', {
        ...IBidder
    });

    init();

    const informTimeout = () => {
        each([Owner, Auctioneer, Jane, John], () => {
            interact.informTimeout();
        });
    };

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

    each([Jane, John], () => {
        interact.enterAuction();
    });

    Owner.pay([[amt, nftId]]);
    assert(balance(nftId) == amt, "balance of NFT is wrong");
    const end = lastConsensusTime() + lengthInBlocks;
    var lastPrice = minimumAmount;
    var isFirstBid = true;
    var highestBidder = null;
    invariant(balance(nftId) == amt)
    invariant(balance() == (isFirstBid ? 0 : lastPrice))
    while (lastConsensusTime() <= end) {
        commit();

        Jane.only(() => {
            const janeBid = interact.bid();
            check(janeBid < lastPrice, "bid is too low");
        });
        Jane.publish(janeBid)
            .timeout(absoluteTime(end), () => {
                informTimeout
                return [highestBidder, lastPrice, isFirstBid];
            });
        commit();
        each([Auctioneer, Owner], () => {
            interact.seeBid(Jane, janeBid);
        });

        John.only(() => {
            const johnBid = interact.bid();
            check(johnBid < lastPrice, "bid is too low");
        });
        John.publish(johnBid)
            .timeout(absoluteTime(end), () => {
                informTimeout
                return [highestBidder, lastPrice, isFirstBid];
            });
        commit();
        each([Auctioneer, Owner], () => {
            interact.seeBid(John, johnBid);
        });

        const bidOutcome = winner(bidJane, bidJohn);
        [highestBidder, lastPrice, isFirstBid] = bidOutcome;

        if (!isFirstBid) {
            transfer(lastPrice).to(highestBidder)
        }

        continue;
    }

    transfer(amt, nftId).to(highestBidder)

    if (!isFirstBid) {
        transfer(lastPrice).to(Owner);
    }

    each([Auctioneer, Owner, Jane, John], () => {
        interact.showOutcome(highestBidder, lastPrice);
    });
    commit();
    exit();

});