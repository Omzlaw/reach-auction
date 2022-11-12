import React, { useState } from 'react';
import Auctioneer from './Components/Auctioneer';
import Bidder from './Components/Bidder';
import Owner from './Components/Owner';
import AppViews from './views/AppViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const { standardUnit } = reach;
const defaults = { defaultFundAmt: '1', defaultMinPrice: 1, standardUnit };

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { view: 'Welcome', ...defaults };
//     }
//     async createAccount(acc) {
//         const balAtomic = await reach.balanceOf(acc);
//         const bal = reach.formatCurrency(balAtomic, 4);
//         this.setState({ acc, bal });
//         if (await reach.canFundFromFaucet()) {
//             this.setState({ view: 'FundAccount' });
//         } else {
//             this.setState({ view: 'OwnerAuctioneerOrBidder' });
//         }
//     }
//     async createTestAccount() {
//         const acc = await reach.newTestAccount(reach.parseCurrency(1));
//         this.createAccount(acc);
//     }
//     async typeAccountSecret() {
//         this.setState({ view: 'TypeAccountSecret' });
//     }
//     async createAccountFromSecret(secret) {
//         const acc = await reach.newAccountFromSecret(secret);
//         this.createAccount(acc);
//     }
//     async fundAccount(fundAmount) {
//         await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
//         this.setState({ view: 'OwnerAuctioneerOrBidder' });
//     }
//     async skipFundAccount() { this.setState({ view: 'OwnerAuctioneerOrBidder' }); }
//     selectOwner() { this.setState({ view: 'Wrapper', ContentView: Owner }); }
//     selectAuctioneer() { this.setState({ view: 'Wrapper', ContentView: Auctioneer }); }
//     selectBidder() { this.setState({ view: 'Wrapper', ContentView: Bidder }); }
//     render() { return renderView(this, AppViews); }
// }


const App = (props) => {

    const [state, setState] = useState({ view: "Welcome", ...defaults });

    const createAccount = async (acc) => {
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        setState({ ...state, acc, bal });
        if (await reach.canFundFromFaucet()) {
            setState({ ...state, view: "FundAccount" });
        } else {
            setState({ ...state, view: "OwnerAuctioneerOrBidder" });
        }
    }
    const createTestAccount = async () => {
        const acc = await reach.newTestAccount(reach.parseCurrency(1));
        createAccount(acc);
    }
    const typeAccountSecret = async () => {
        setState({ ...state, view: "TypeAccountSecret" });
    }
    const createAccountFromSecret = async (secret) => {
        const acc = await reach.newAccountFromSecret(secret);
        createAccount(acc);
    }
    const fundAccount = async (fundAmount) => {
        await reach.fundFromFaucet(acc, reach.parseCurrency(fundAmount));
        setState({ ...state, view: "OwnerAuctioneerOrBidder" });
    }
    const skipFundAccount = async () => {
        setState({ ...state, view: "OwnerAuctioneerOrBidder" });
    }
    const selectOwner = () => {
        setState({ ...state, view: "Wrapper", ContentView: Owner });
    }
    const selectAuctioneer = () => {
        setState({ ...state, view: "Wrapper", ContentView: Auctioneer });
    }
    const selectBidder = () => {
        setState({ ...state, view: "Wrapper", ContentView: Bidder });
    }

    const parent = {
        state,
        props: props,
        createTestAccount,
        typeAccountSecret,
        createAccountFromSecret,
        fundAccount,
        skipFundAccount,
        selectOwner,
        selectAuctioneer,
        selectBidder
    }

    return (
        <div>
            {renderView(parent, AppViews)}
        </div>
    )
}

renderDOM(<App />);