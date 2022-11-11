import React, { useState } from 'react';
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
    async showOutcome(winner, amt) {
        const balance = await this.getBalance();
        const amtNFT = await this.getNFTBalance(this.state.nftId);
        this.setState({ view: 'ShowOutcome', standardUnit, winner: reach.formatAddress(winner), amt: reach.formatCurrency(amt), balance, amtNFT });
    }
    async getBalance() {
        return reach.formatCurrency(await reach.balanceOf(this.props.acc));
    }
    async getNFTBalance(nftId) {
        return await this.props.acc.balanceOf(JSON.parse(nftId));
    }
    restart() {
        this.setState(null);
        this.setState({ view: 'SetNFT' });
    }

    render() { return renderView(this, OwnerViews); }
}

const Owner = (props) => {
    const [view, setView] = useState('SetNFT');
    const [nftId, setNftId] = useState(null);
    const [ctc, setCtc] = useState(null);
    const [ctcInfoStr, setCtcInfoStr] = useState(null);
    const [who, setWho] = useState(null);
    const [amt, setAmt] = useState(null);
    const [amtNFT, setAmtNFT] = useState(null);
    const [winner, setWinner] = useState(null);
    const [balance, setBalance] = useState(null);

    const setMyNFT = (nftId) => { 
        setView('Deploy');
        setNftId(nftId);
    }
    const setDemoNFT = async () => {
        const NFT = await reach.launchToken(props.acc, "Omz", "NFT", { supply: 1 });
        setView('Deploy');
        setNftId(NFT.id);
    }
    const setNFT = () => {
        return { nftId };
    }
    const deploy = async () => {
        const ctc = props.acc.contract(backend);
        setView('Deploy');
        setCtc(ctc);
        backend.Owner(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        const nftId = JSON.stringify(nftId);
        setView('WaitingForAuctionToStart');
        setNftId(nftId);
        setCtcInfoStr(ctcInfoStr);
    }
    const seeBid = (who, amt) => {
        setView('SeeBid');
        setWho(reach.formatAddress(who));
        setAmt(reach.formatCurrency(amt));
    }
    const showOutcome = async  (winner, amt) => {
        const balance = await this.getBalance();
        const amtNFT = await this.getNFTBalance(this.state.nftId);
        setView('ShowOutcome');
        setWinner(reach.formatAddress(winner));
        setAmt(reach.formatCurrency(amt));
        setBalance(balance);
        setAmtNFT(amtNFT);
    }
    const getBalance = async () => {
        return reach.formatCurrency(await reach.balanceOf(props.acc));
    }
    const getNFTBalance = async (nftId) => {
        return await props.acc.balanceOf(JSON.parse(nftId));
    }
    const restart = () => {
        setView('SetNFT')
    }

    const parent = {
        state: {
            view,
            ctc,
            ctcInfoStr,
            who,
            amt,
            amtNFT,
            winner,
            balance
        },
        props: {},
        setDemoNFT,
        setMyNFT,
        deploy,
        setNFT,
        seeBid,
        showOutcome,
        getBalance,
        getNFTBalance,
        restart
    }

    return renderView(parent, OwnerViews);
}

export default Owner;