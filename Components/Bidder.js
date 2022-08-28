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
        const {acc} = this.props;
        await acc.tokenAccept(nftId);
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({ view: 'Attaching' });
        this.setState({ view: 'PlaceBid', standardUnit, ctc })
    }
    async placeBid(ctc, bid) {
        try {
            const previousBalance = await this.getBalance();
            const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
            const latestBalance = await this.getBalance();
            this.setState(
                {
                    view: 'PlaceBid',
                    standardUnit,
                    ctc,
                    lastBid: reach.formatCurrency(lastBid),
                    bid: reach.formatCurrency(bid),
                    previousBalance,
                    latestBalance
                })
        } catch (error) {
            this.setState({ view: 'Error', error });
            console.log(error);
        }
    }
    async getBalance() {
        return reach.formatCurrency(await reach.balanceOf(this.props.acc));
    }
    render() { return renderView(this, AttacherViews); }
}

export default Bidder;