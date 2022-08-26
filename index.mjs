import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const bidders = [];
let accCreator = null;
let nftId = null;
let done = false;

const isCreator = await ask.ask(
    `Are you the Auction Creator?`,
    ask.yesno
);

if (isCreator) {
    const createAccount = await ask.ask(
        `Would you like to create an account? (only possible on devnet)`,
        ask.yesno
    );


    if (createAccount) {
        console.log("Creating test account for Creator");
        accCreator = await stdlib.newTestAccount(startingBalance);
    } else {
        const secret = await ask.ask(
            `What is your account secret?`,
            (x => x)
        );
        accCreator = await stdlib.newAccountFromSecret(secret);
    }


    const NFT = await stdlib.launchToken(accCreator, "Omz", "NFT", { supply: 1 });



    nftId = NFT.id;
    const minimumBid = await ask.ask(
        `How much is the minimum bid?`,
        stdlib.parseCurrency
    );
    const lengthInBlocks = 20;


    const auctionParams = { nftId, minimumBid, lengthInBlocks };

    

    const ctcCreator = accCreator.contract(backend);

    await ctcCreator.participants.Creator({
        getSale: () => {
            console.log("Setting the parameters of the sale ", auctionParams);
            return auctionParams;
        },
        auctionReady: async () => {
            // startBidders();
            const startAuction = await ask.ask(
                `Start Auction`,
                ask.yesno
            );

            if (startAuction) {
                const info = await ctcCreator.getInfo();
                console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
            } else {
                process.exit(0);
            }

        },
        seeBid: (who, amt) => {
            console.log(`Creator saw that ${stdlib.formatAddress(who)} bidded ${stdlib.formatCurrency(amt)}`);
        },
        showOutcome: (winner, amt) => {
            console.log(`Creator saw that ${stdlib.formatAddress(winner)} won with a bid of ${stdlib.formatCurrency(amt)}`);
        }
    });
}

else {

    const bidderName = await ask.ask(
        `What is your name?`,
        stdlib.text
    );



    const runBidder = async (who) => {
        let accBidder = null;
        const createAccount = await ask.ask(
            `Would you like to create an account? (only possible on devnet)`,
            ask.yesno
        );

        if (createAccount) {
            console.log("Creating test account for Bidder");
            accBidder = await stdlib.newTestAccount(startingBalance);
        } else {
            const secret = await ask.ask(
                `What is your account secret?`,
                (x => x)
            );
            accBidder = await stdlib.newAccountFromSecret(secret);
        }

        const info = await ask.ask(
            `Please paste the contract information:`,
            JSON.parse
        );
        const ctc = accBidder.contract(backend, info);

        const bid = await ask.ask(
            `What is your bid price?`,
            stdlib.parseCurrency
        );

        // const acc = await stdlib.newTestAccount(startingBalance);
        // acc.setDebugLabel(who);
        await accBidder.tokenAccept(nftId);
        bidders.push([who, accBidder]);
        // const ctc = acc.contract(backend, ctcCreator.getInfo());
        const getBalance = async () => {
            return stdlib.formatCurrency(await stdlib.balanceOf(accBidder));
        }

        console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}`);
        console.log(`${who} balance before is ${await getBalance()}`);

        try {
            const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
            console.log(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)}`);
        } catch (error) {
            console.log(`${who} failed to bid, because the auction is over`);
        }

        console.log(`${who} balance after is ${await getBalance()}`);
    };

    await runBidder(bidderName);

    // const bidders = [];
    // const startBidders = async () => {
    //     // let bid = minimumBid;
    //     const runBidder = async (who) => {
    //         // const increment = stdlib.parseCurrency(Math.random() * 10);
    //         const bid = await ask.ask(
    //             `What is your bid price?`,
    //             stdlib.parseCurrency
    //         );

    //         // bid = bid.add(increment);

    //         const acc = await stdlib.newTestAccount(startingBalance);
    //         acc.setDebugLabel(who);
    //         await acc.tokenAccept(nftId);
    //         bidders.push([who, acc]);
    //         const ctc = acc.contract(backend, ctcCreator.getInfo());
    //         const getBalance = async () => {
    //             return stdlib.formatCurrency(await stdlib.balanceOf(acc));
    //         }

    //         console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}`);
    //         console.log(`${who} balance before is ${await getBalance()}`);

    //         try {
    //             const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
    //             console.log(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)}`);
    //         } catch (error) {
    //             console.log(`${who} failed to bid, because the auction is over`);
    //         }

    //         console.log(`${who} balance after is ${await getBalance()}`);
    //     };


    //     // while (!done) {
    //     //     await stdlib.wait(1);
    //     // }
    // };
}

while (!done && bidders.length < 1) {
    await stdlib.wait(1);
}



// for (const [who, acc] of bidders) {
//     const [amt, amtNFT] = await stdlib.balancesOf(acc, [null, nftId]);
//     console.log(`${who} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT}`);
// }

done = true;
ask.done();