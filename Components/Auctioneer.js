import React from 'react';
import AuctioneerViews from '../views/AuctioneerViews';
import { renderView } from '../views/render';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

class Auctioneer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'Attach' };
    }
    async attach(ctcInfoStr) {
        const { acc } = this.props;
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({ view: 'Attaching' });
        this.setState({ view: 'SetMinimumBid', standardUnit, ctc });
    }
    setMinimumBid(minBid) { this.setState({ view: 'SetAuctionLength', minBid }); }
    setAuctionLength(lengthInBlocks) { 
        this.setState({ view: 'StartingAuction', lengthInBlocks }); 
        backend.Auctioneer(this.state.ctc, this);
    }
    async startAuction() {
        const { minBid, lengthInBlocks } = this.state;
        const auctionParams = { minimumAmount: Number(minBid), lengthInBlocks };
        this.setState({ view: 'WaitingForBidders' });
        return auctionParams;
    }
    seeBid(who, amt) {
        { this.setState({ view: 'SeeBid', standardUnit, who: reach.formatAddress(who), amt: reach.formatCurrency(amt) }); }
    }
    showOutcome(winner, amt) {
        this.setState({ view: 'ShowOutcome', standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt) });
    }
    restart() {
        this.setState(null);
        this.setState({ view: 'Attach' });
    }

    render() { return renderView(this, AuctioneerViews); }
}

export default Auctioneer;