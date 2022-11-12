import React, { useState } from 'react';
import AuctioneerViews from '../views/AuctioneerViews';
import { renderView } from '../views/render';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

// class Auctioneer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { view: 'Attach' };
//     }
//     async attach(ctcInfoStr) {
//         const { acc } = this.props;
//         const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
//         this.setState({ view: 'Attaching' });
//         this.setState({ view: 'SetMinimumPrice', standardUnit, ctc });
//     }
//     setMinimumPrice(minPrice) { this.setState({ view: 'SetMinimumBidDiff', minPrice }); }
//     setMinimumBidDiff(minBidDiff) { this.setState({ view: 'SetAuctionLength', minBidDiff }); }
//     setAuctionLength(lengthInBlocks) { 
//         this.setState({ view: 'StartingAuction', lengthInBlocks }); 
//         backend.Auctioneer(this.state.ctc, this);
//     }
//     async startAuction() {
//         const { minPrice, minBidDiff, lengthInBlocks } = this.state;
//         const auctionParams = { minPrice: Number(minPrice), minBidDiff: Number(minBidDiff), lengthInBlocks };
//         this.setState({ view: 'WaitingForBidders' });
//         return auctionParams;
//     }
//     seeBid(who, amt) {
//         { this.setState({ view: 'SeeBid', standardUnit, who: reach.formatAddress(who), amt: reach.formatCurrency(amt) }); }
//     }
//     showOutcome(winner, amt) {
//         this.setState({ view: 'ShowOutcome', standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt) });
//     }
//     restart() {
//         this.setState(null);
//         this.setState({ view: 'Attach' });
//     }

//     render() { return renderView(this, AuctioneerViews); }
// }


const Auctioneer = (props) => {
    const [state, setState] = useState();

    const startAuction = async () => {
        const { minPrice, minBidDiff, lengthInBlocks } = state;
        const auctionParams = { minPrice: Number(minPrice), minBidDiff: Number(minBidDiff), lengthInBlocks };
        setState({ ...state, view: 'WaitingForBidders' });
        return auctionParams;
    }
    const seeBid = (who, amt) => {
        { setState({ ...state, view: 'SeeBid', standardUnit, who: reach.formatAddress(who), amt: reach.formatCurrency(amt) }); }
    }
    const showOutcome = (winner, amt) => {
        setState({ ...state, view: 'ShowOutcome', standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt) });
    }

    const interactObjects = {
        startAuction,
        seeBid,
        showOutcome,
    }

    const attach = (ctcInfoStr) => {
        const { acc } = props;
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        setState({ ...state, view: 'Attaching' });
        setState({ ...state, view: 'SetMinimumPrice', standardUnit, ctc });
    }

    const setMinimumPrice = (minPrice) => { setState({ ...state, view: 'SetMinimumBidDiff', minPrice }); }

    const setMinimumBidDiff = (minBidDiff) => { setState({ ...state, view: 'SetAuctionLength', minBidDiff }); }

    const setAuctionLength = (lengthInBlocks) => {
        setState({ ...state, view: 'StartingAuction', lengthInBlocks });
        backend.Auctioneer(state.ctc, { ...interactObjects });
    }

    const restart = () => {
        setState({ view: 'Attach' });
    }

    const parent = {
        state,
        props: props,
        attach,
        setMinimumPrice,
        setMinimumBidDiff,
        setAuctionLength,
        restart
    }

    return (
        <div>
            {renderView(parent, AuctioneerViews)}
        </div>
    )
}

export default Auctioneer;