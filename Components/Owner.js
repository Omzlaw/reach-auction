import React, { useState } from 'react';
import OwnerViews from '../views/OwnerViews';
import { renderView } from '../views/render';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

// class Owner extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { view: 'SetNFT' };
//     }
//     setMyNFT(nftId) { this.setState({ view: 'Deploy', nftId }); }
//     async setDemoNFT() {
//         const NFT = await reach.launchToken(this.props.acc, "Omz", "NFT", { supply: 1 });
//         this.setState({ view: 'Deploy', nftId: NFT.id })
//     }
//     async setNFT() {
//         const nftId = this.state.nftId;
//         return { nftId };
//     }
//     async deploy() {
//         const ctc = this.props.acc.contract(backend);
//         this.setState({ view: 'Deploying', ctc });
//         backend.Owner(ctc, this);
//         const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
//         const nftId = JSON.stringify(this.state.nftId);
//         this.setState({ view: 'WaitingForAuctionToStart', ctcInfoStr, nftId });
//     }
//     seeBid(who, amt) {
//         { this.setState({ view: 'SeeBid', standardUnit, who: reach.formatAddress(who), amt: reach.formatCurrency(amt) }); }
//     }
//     async showOutcome(winner, amt) {
//         const balance = await this.getBalance();
//         const amtNFT = await this.getNFTBalance(this.state.nftId);
//         this.setState({ view: 'ShowOutcome', standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt), balance, amtNFT });
//     }
//     async getBalance() {
//         return reach.formatCurrency(await reach.balanceOf(this.props.acc));
//     }
//     async getNFTBalance(nftId) {
//         return await this.props.acc.balanceOf(JSON.parse(nftId));
//     }
//     restart() {
//         this.setState(null);
//         this.setState({ view: 'SetNFT' });
//     }

//     render() { return renderView(this, OwnerViews); }
// }

const Owner = (props) => {
    const [state, setState] = useState(null);

    const setNFT = () => {
        const nftId = state.nftId;
        return { nftId };
    }
    const seeBid = (who, amt) => {
        setState({ ...state, view: "SeeBid", standardUnit, who: reach.formatAddress(who), amt: reach.formatCurrency(amt) });
    }
    const showOutcome = async (winner, amt) => {
        const balance = await getBalance();
        const amtNFT = await getNFTBalance(state.nftId);
        setState({ ...state, view: "ShowOutcome", standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt), balance: balance, amtNFT: amtNFT });
    }

    const interactObjects = {
        setNFT,
        seeBid,
        showOutcome,
    }

    const setMyNFT = (nftId) => {
        setState({ ...state, view: "Deploy", nftId: nftId });
    }
    const setDemoNFT = async () => {
        const NFT = await reach.launchToken(props.acc, "Omz", "NFT", { supply: 1 });
        setState({ ...state, view: "Deploy", nftId: NFT.id });
    }

    const deploy = async () => {
        const ctc = props.acc.contract(backend);
        setState({ ...state, view: "Deploy", ctc: ctc });
        backend.Owner(ctc, { ...interactObjects });
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        const nftId = JSON.stringify(nftId);
        setState({ ...state, view: "WaitingForAuctionToStart", nftId: NFT.id, ctcInfoStr: ctcInfoStr });
    }
    const getBalance = async () => {
        return reach.formatCurrency(await reach.balanceOf(props.acc));
    }

    const getNFTBalance = async (nftId) => {
        return await props.acc.balanceOf(JSON.parse(nftId));
    }

    const restart = () => {
        setState({ view: "SetNFT" });
    }

    const parent = {
        state,
        props: props,
        setDemoNFT,
        setMyNFT,
        deploy,
        getBalance,
        getNFTBalance,
        restart
    }

    return (
        <div>
            {renderView(parent, OwnerViews)}
        </div>
    )
}

export default Owner;