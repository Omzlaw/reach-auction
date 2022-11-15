import React, { useState } from 'react';
import Auctioneer from './Components/Auctioneer';
import Bidder from './Components/Bidder';
import Owner from './Components/Owner';
import { Wrapper, Welcome, TypeAccountSecret, FundAccount, OwnerAuctioneerOrBidder } from './views/AppViews';
import { renderDOM } from './views/render';
import './index.css';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const { standardUnit } = reach;
const defaults = { defaultFundAmt: '1', defaultMinPrice: 1, standardUnit };

const App = (props) => {

    const [view, setView] = useState("Welcome");
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);


    const createAccount = async (acc) => {
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic);
        setAccount(acc);
        setBalance(bal);
        if (await reach.canFundFromFaucet()) {
            setView("FundAccount");
        } else {
            setView("OwnerAuctioneerOrBidder");
        }
    }
    const createTestAccount = async () => {
        const acc = await reach.newTestAccount(reach.parseCurrency(1));
        createAccount(acc);
    }
    const typeAccountSecret = async () => {
        setView("TypeAccountSecret");
    }
    const createAccountFromSecret = async (secret) => {
        const acc = await reach.newAccountFromSecret(secret);
        createAccount(acc);
    }
    const fundAccount = async (fundAmount) => {
        await reach.fundFromFaucet(account, reach.parseCurrency(fundAmount));
        setView("OwnerAuctioneerOrBidder");
    }
    const skipFundAccount = async () => {
        setView("OwnerAuctioneerOrBidder");
    }
    const selectOwner = () => {
        setView("Owner");
    }
    const selectAuctioneer = () => {
        setView("Auctioneer");
    }
    const selectBidder = () => {
        setView("Bidder");
    }


    switch (view) {
        case 'Welcome':
            return <Wrapper content={<Welcome parent={{ createTestAccount, typeAccountSecret }} />} />
        case 'TypeAccountSecret':
            return <Wrapper content={<TypeAccountSecret parent={{ createAccountFromSecret }} />} />
        case 'FundAccount':
            return <Wrapper content={<FundAccount parent={{ fundAccount, skipFundAccount }} bal={balance} standardUnit={defaults.standardUnit} defaultFundAmt={defaults.defaultFundAmt} />} />
        case 'OwnerAuctioneerOrBidder':
            return <Wrapper content={<OwnerAuctioneerOrBidder parent={{ selectOwner, selectAuctioneer, selectBidder }} />} />
        case 'Owner':
            return <Wrapper content={<Owner acc={account} />} />
        case 'Auctioneer':
            return <Wrapper content={<Auctioneer acc={account} />} />
        case 'Bidder':
            return <Wrapper content={<Bidder acc={account} />} />
        default:
            return (
                <div></div>
            );
    }
}

renderDOM(<App />);