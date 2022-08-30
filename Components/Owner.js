import React from 'react';
import OwnerViews from '../views/OwnerViews';
import { renderView } from '../views/render';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

class Owner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'SetNFT' };
    }
    setMyNFT(nftId) { this.setState({ view: 'Deploy', nftId }); }
    async setDemoNFT() {
        const NFT = await reach.launchToken(this.props.acc, "Omz", "NFT", { supply: 1 });
        this.setState({ view: 'Deploy', nftId: NFT.id })
    }
    async setNFT() {
        const nftId = this.state.nftId;
        return { nftId };
    }
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({ view: 'Deploying', ctc });
        backend.Owner(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        const nftId = JSON.stringify(this.state.nftId);
        this.setState({ view: 'WaitingForAuctionToStart', ctcInfoStr, nftId });
    }
    seeBid(who, amt) {
        { this.setState({ view: 'SeeBid', standardUnit, who: reach.formatAddress(who), amt: reach.formatCurrency(amt) }); }
    }
    showOutcome(winner, amt) {
        this.setState({ view: 'ShowOutcome', standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt) });
    }
    restart() {
        this.setState(null);
        this.setState({ view: 'SetNFT' });
    }

    render() { return renderView(this, OwnerViews); }
}

export default Owner;