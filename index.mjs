import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log("Creating test account for Creator");
const accCreator = await stdlib.newTestAccount(startingBalance);

const NFT = await stdlib.launchToken(accCreator, "Omz", "NFT", { supply: 1 });

const nftId = NFT.id;
const minimumBid = stdlib.parseCurrency(2);
const lengthInBlocks = 10;

const auctionParams = { nftId, minimumBid, lengthInBlocks };

let done = false;
const bidders = [];
const startBidders = async () => {
    let bid = minimumBid;
    const runBidder = async (who) => {
        const increment = stdlib.parseCurrency(Math.random() * 10);

        bid = bid.add(increment);

        const acc = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        await acc.tokenAccept(nftId);
        bidders.push([who, acc]);
        const ctc = acc.contract(backend, ctcCreator.getInfo());
        const getBalance = async () => {
            return stdlib.formatCurrency(await stdlib.balanceOf(acc));
        }

        console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}`);
        console.log(`${who} balance before is ${await getBalance()}`);

        try {
            const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(who);
            console.log(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)}`);
        } catch (error) {
            console.log(`${who} failed to bid, because the auction is over`);
        }

        console.log(`${who} balance after is ${await getBalance()}`);
    };

    await runBidder('Alice');
    await runBidder('Bob');
    await runBidder('Claire');

    while (!done) {
        await stdlib.wait(1);
    }
};





const ctcCreator = accCreator.contract(backend);
await ctcCreator.particpants.Creator({
    getSale: () => {
        console.log("Setting the parameters of the sale ", auctionParams);
        return auctionParams;
    },
    auctionReady: () => {
        startBidders();
    },
    seeBid: (who, amt) => {
        console.log(`Creator saw that ${stdlib.formatAddress(who)} bidded ${stdlib.formatCurrency(amt)}`);
    },
    showOutcome: (winner, amt) => {
        console.log(`Creator saw that ${stdlib.formatAddress(winner)} won with a bid of ${stdlib.formatCurrency(amt)}`);
    }
});

for (const [who, acc] of bidders) {
    const [amt, amtNFT] = await stdlib.balancesOf(acc, [null, nftId]);
    console.log(`${who} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT}`);
}

done = true;