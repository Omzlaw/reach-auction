import React from 'react';
import CreatorViews from '../views/CreatorViews';
import { renderView } from '../views/render';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

class Creator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'SetMinimumBid' };
    }
    setMinimumBid(minBid) { this.setState({ view: 'SetNft', minBid }); }
    setNFT(nftId) { this.setState({ view: 'SetAuctionLength', nftId }); }
    async setDemoNFT() {
        const NFT = await reach.launchToken(this.props.acc, "Omz", "NFT", { supply: 1 });
        this.setState({ view: 'SetAuctionLength', nftId: NFT.id, lengthInBlocks: 50 })
    }
    setAuctionLength(lengthInBlocks) { this.setState({ view: 'Deploy', lengthInBlocks }); }
    async getSale() {
        const { minBid, nftId, lengthInBlocks } = this.state;
        const auctionParams = { nftId, minimumBid: Number(minBid), lengthInBlocks };
        return auctionParams;
    }
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({ view: 'Deploying', ctc });
        backend.Creator(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        const nftId = JSON.stringify(this.state.nftId);
        this.setState({ view: 'WaitingForBidders', ctcInfoStr, nftId });
    }
    seeBid(who, amt) {
        { this.setState({ view: 'SeeBid', who: reach.formatAddress(who), amt: reach.formatCurrency(amt) }); }
    }
    showOutcome(winner, amt) {
        this.setState({ view: 'ShowOutcome', winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt) });
    }
    restart() {
        this.setState(null);
        this.setState({ view: 'SetMinimumBid' });
    }

    render() { return renderView(this, CreatorViews); }
}

export default Creator;