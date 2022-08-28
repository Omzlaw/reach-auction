import React from 'react';
import Creator from './Components/Creator';
import Bidder from './Components/Bidder';
import AppViews from './views/AppViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const { standardUnit } = reach;
const defaults = { defaultFundAmt: '1', defaultMinBid: 1, standardUnit };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'Welcome', ...defaults };
    }
    async createAccount(acc) {
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({ acc, bal });
        if (await reach.canFundFromFaucet()) {
            this.setState({ view: 'FundAccount' });
        } else {
            this.setState({ view: 'CreatorOrBidder' });
        }
    }
    async createTestAccount() {
        const acc = await reach.newTestAccount(reach.parseCurrency(1));
        this.createAccount(acc);
    }
    async typeAccountSecret() {
        this.setState({ view: 'TypeAccountSecret' });
    }
    async createAccountFromSecret(secret) {
        const acc = await reach.newAccountFromSecret(secret);
        this.createAccount(acc);
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({ view: 'CreatorOrBidder' });
    }
    async skipFundAccount() { this.setState({ view: 'CreatorOrBidder' }); }
    selectCreator() { this.setState({ view: 'Wrapper', ContentView: Creator }); }
    selectBidder() { this.setState({ view: 'Wrapper', ContentView: Bidder }); }
    render() { return renderView(this, AppViews); }
}


renderDOM(<App />);