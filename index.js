import React from 'react';
import AppViews from './views/AppViews';
import CreatorViews from './views/CreatorViews';
import AttacherViews from './views/AttacherViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const { standardUnit } = reach;
const defaults = { defaultFundAmt: '0.1', defaultMinBid: 0.1, standardUnit };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'ConnectAccount', ...defaults };
    }
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({ acc, bal });
        if (await reach.canFundFromFaucet()) {
            this.setState({ view: 'FundAccount' });
        } else {
            this.setState({ view: 'CreatorOrBidder' });
        }
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

class Creator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'SetMinimumBid' };
    }
    setMinimumBid(minBid) { this.setState({ view: 'SetNFTId', minBid }); }
    setNftId(nftId) {this.setState({view: 'SetNft', nftId}); }
    seeBid(who, amt) {
        const whoAmt = {who, amt};
        {this.setState({view: 'SeeBid', whoAmt}); }
    }
    showOutcome(winner, amt) { 
        const winnerAmt = {winner, amt}
        this.setState({view: 'Done', outcome: winnerAmt}); 
    }

    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({ view: 'Deploying', ctc });
        this.minBid = reach.parseCurrency(this.state.minBid); // UInt
        this.lengthInBlocks = 100// UInt
        backend.Creator(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({ view: 'WaitingForBidders', ctcInfoStr });
    }
    render() { return renderView(this, CreatorViews); }
}
class Bidder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'Attach' };
    }
    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({ view: 'Attaching' });
        backend._APIs(ctc, this);
    }
    render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);