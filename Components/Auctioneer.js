import React, { useState } from 'react';
import {
    Wrapper, Attach, WaitingForBidders, SetMinimumPrice, Attaching, SetMinimumBidDiff, SetAuctionLength, StartingAuction, SeeBid, ShowOutcome
} from '../views/AuctioneerViews';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

const Auctioneer = (props) => {
    const [view, setView] = useState("Attach");
    const [who, setWho] = useState(null);
    const [amt, setAmt] = useState(null);
    const [winner, setWinner] = useState(null);
    const [ctc, setCtc] = useState(null);
    const [minPrice, setMinPrice] = useState(1);
    const [minBidDiff, setMinBidDiff] = useState(1);
    const [lengthInBlocks, setLengthInBlocks] = useState(10);

    const startAuction = async () => {
        const auctionParams = { minPrice: Number(minPrice), minBidDiff: Number(minBidDiff), lengthInBlocks: Number(lengthInBlocks) };
        setView("WaitingForBidders");
        return auctionParams;
    }
    const seeBid = (who, amt) => {
        setView("SeeBid");
        setWho(reach.formatAddress(who));
        setAmt(reach.formatCurrency(amt));
    }
    const showOutcome = (winner, amt) => {
        setView("ShowOutcome");
        setWinner(reach.formatAddress(winner));
        setAmt(reach.formatCurrency(amt));
    }

    const interactObjects = {
        startAuction,
        seeBid,
        showOutcome,
    }

    const attach = (ctcInfoStr) => {
        const { acc } = props;
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        setView("Attaching");
        setView("SetMinimumPrice");
        setCtc(ctc);
    }

    const setMinimumPrice = (minPrice) => {
        setView("SetMinimumBidDiff");
        setMinPrice(minPrice);
    }

    const setMinimumBidDiff = (minBidDiff) => {
        setView("SetAuctionLength");
        setMinBidDiff(minBidDiff);
    }

    const setAuctionLength = (lengthInBlocks) => {
        setView("StartingAuction");
        setLengthInBlocks(lengthInBlocks);
        backend.Auctioneer(ctc, { ...interactObjects });
    }

    const restart = () => {
        setView("Attach");
    }

    switch (view) {
        case 'Attach':
            return <Wrapper content={<Attach parent={{ attach }} />} />
        case 'WaitingForBidders':
            return <Wrapper content={<WaitingForBidders />} />
        case 'Attaching':
            return <Wrapper content={<Attaching />} />
        case 'SetMinimumPrice':
            return <Wrapper content={<SetMinimumPrice parent={{ setMinimumPrice }} defaultMinPrice={1} standardUnit={standardUnit} />} />
        case 'SetMinimumBidDiff':
            return <Wrapper content={<SetMinimumBidDiff parent={{ setMinimumBidDiff }} defaultMinBidDiff={1} standardUnit={standardUnit} />} />
        case 'SetAuctionLength':
            return <Wrapper content={<SetAuctionLength parent={{ setAuctionLength }} />} />
        case 'StartingAuction':
            return <Wrapper content={<StartingAuction />} />
        case 'SeeBid':
            return <Wrapper content={<SeeBid who={who} amt={amt} standardUnit={standardUnit} />} />
        case 'WaitingForAuctionToStart':
            return <Wrapper content={<WaitingForAuctionToStart ctcInfoStr={ctcInfoStr} nftId={nftID} />} />
        case 'ShowOutcome':
            return <Wrapper content={<ShowOutcome parent={{ restart }} winner={winner} amt={amt} standardUnit={standardUnit} />} />
        default:
            return (
                <div></div>
            );
    }
}

export default Auctioneer;