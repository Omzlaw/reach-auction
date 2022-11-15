import React, { useState } from 'react';
import { Wrapper, SetNFT, SeeBid, ShowOutcome, Deploy, WaitingForAuctionToStart } from '../views/OwnerViews';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;


const Owner = (props) => {
    const { acc } = props;
    const [view, setView] = useState("SetNFT");
    const [who, setWho] = useState(null);
    const [amt, setAmt] = useState(null);
    const [amtNFT, setAmtNFT] = useState(null);
    const [winner, setWinner] = useState(null);
    const [balance, setBalance] = useState(null);
    const [nftID, setNFTID] = useState(null);
    const [ctc, setCtc] = useState(null);
    const [ctcInfoStr, setCtcInfoStr] = useState(null);

    const setNFT = () => {
        const nftId = nftID;
        return { nftId };
    }
    const seeBid = (who, amt) => {
        setView("SeeBid");
        setWho(reach.formatAddress(who));
        setAmt(reach.formatCurrency(amt, 4));
    }
    const showOutcome = async (winner, amt) => {
        const balance = await getBalance();
        const amtNFT = await getNFTBalance(nftID);
        setView("ShowOutcome");
        setWinner(reach.formatAddress(winner));
        setAmt(reach.formatCurrency(amt));
        setBalance(balance)
        setAmtNFT(amtNFT);
    }

    const interactObjects = {
        setNFT,
        seeBid,
        showOutcome,
    }

    const setMyNFT = (nftId) => {
        setView("Deploy");
        setNFTID(nftId);
    }
    const setDemoNFT = async () => {
        const NFT = await reach.launchToken(acc, "Omz", "NFT", { supply: 1 });
        setView("Deploy");
        setNFTID(NFT.id);
    }

    const deploy = async () => {
        const ctc = acc.contract(backend);
        setView("Deploy");
        setCtc(ctc);
        backend.Owner(ctc, { ...interactObjects });
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        const nftId = JSON.stringify(nftID);
        setView("WaitingForAuctionToStart")
        setNFTID(nftId);
        setCtcInfoStr(ctcInfoStr);
    }
    const getBalance = async () => {
        return reach.formatCurrency(await reach.balanceOf(acc));
    }

    const getNFTBalance = async (nftId) => {
        return await acc.balanceOf(JSON.parse(nftId));
    }

    const restart = () => {
        setView("SetNFT");
    }


    switch (view) {
        case 'SetNFT':
            return <Wrapper content={<SetNFT parent={{ setMyNFT, setDemoNFT }} />} />
        case 'Deploy':
            return <Wrapper content={<Deploy parent={{ deploy }} />} />
        case 'SeeBid':
            return <Wrapper content={<SeeBid who={who} amt={amt} standardUnit={standardUnit} />} />
        case 'WaitingForAuctionToStart':
            return <Wrapper content={<WaitingForAuctionToStart ctcInfoStr={ctcInfoStr} nftId={nftID} />} />
        case 'ShowOutcome':
            return <Wrapper content={<ShowOutcome parent={{ restart }} winner={winner} amt={amt} standardUnit={standardUnit} balance={balance} />} />
        default:
            return (
                <div></div>
            );
    }
}

export default Owner;