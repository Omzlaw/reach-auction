import React from 'react';
import AttacherViews from '../views/AttacherViews';
import { renderView } from '../views/render';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

class Bidder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'Attach' };
    }
    async attach(ctcInfoStr, nftId) {
        const { acc } = this.props;
        const jsonNFTId = JSON.parse(nftId);
        await acc.tokenAccept(jsonNFTId);
        this.setState({nftId: jsonNFTId});
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({ view: 'Attaching' });
        this.setState({ view: 'PlaceBid', standardUnit, ctc })
    }
    async placeBid(ctc, bid) {
        let previousBalance = 0;
        let latestBalance = 0;
        try {
            previousBalance = await this.getBalance();
            const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
            latestBalance = await this.getBalance();
            this.setState(
                {
                    error: null,
                    view: 'PlaceBid',
                    standardUnit,
                    ctc,
                    lastBid: reach.formatCurrency(lastBid),
                    bid: reach.formatCurrency(bid),
                    previousBalance,
                    latestBalance,
                    lastBidder: reach.formatAddress(lastBidder)
                })
        } catch (error) {
            console.log(error);
            if (error.message.includes("bid is too low")) {
                this.setState(
                    {
                        error,
                        view: 'PlaceBid',
                        standardUnit,
                        ctc,
                        previousBalance,
                        latestBalance
                    })
            } else {
                const amt = await this.getBalance();
                const amtNFT = await this.getNFTBalance(this.state.nftId);
                this.setState({ view: 'Error', amt, standardUnit, amtNFT });
            }

        }
    }
    async getBalance() {
        return reach.formatCurrency(await reach.balanceOf(this.props.acc));
    }
    async getNFTBalance(nftId) {
        return await this.props.acc.balanceOf(nftId);
    }
    render() { return renderView(this, AttacherViews); }
}

export default Bidder;