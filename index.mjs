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








const ctcCreator = accCreator.contract(backend);
await ctcCreator.particpants.Creator({
    getSale: () => {
        console.log("Setting the parameters of the sale ", auctionParams);
        return auctionParams;
    },
    auctionReady: () => {
        startBidding();
    },
    seeBid: (who, amt) => {
        console.log(`Creator saw that ${stdlib.formatAddress(who)} bidded ${stdlib.formatCurrency(amt)}`);
    },
    showOutcome: (winner, amt) => {
        console.log(`Creator saw that ${stdlib.formatAddress(winner)} won with a bid of ${stdlib.formatCurrency(amt)}`);
    }
});