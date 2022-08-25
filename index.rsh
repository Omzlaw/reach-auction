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

});