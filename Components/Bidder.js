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
        await acc.tokenAccept(JSON.parse(nftId));
        this.setState({nftId});
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
                    latestBalance
                })
        } catch (error) {
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
                // const [amt, amtNFT] = await this.getNFTBalance(this.state.nftId);
                // console.log(amtNFT);
                this.setState({ view: 'Error', amt, standardUnit });
            }

        }
    }
    async getBalance() {
        return reach.formatCurrency(await reach.balanceOf(this.props.acc));
    }
    async getNFTBalance(nftId) {
        return await reach.balancesOf(this.props.acc, [null, nftId]);
    }
    render() { return renderView(this, AttacherViews); }
}

export default Bidder;