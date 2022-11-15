import React, { useState } from 'react';
import { Wrapper, Attach, Attaching } from '../views/AttacherViews';
import { PlaceBid, Error } from '../views/BidderViews';
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
const { standardUnit } = reach;

const Bidder = (props) => {
    const { acc } = props;
    const [view, setView] = useState("Attach");
    const [nftId, setNFTID] = useState(null);
    const [amt, setAmt] = useState(null);
    const [amtNFT, setAmtNFT] = useState(null);
    const [error, setError] = useState(null);
    const [lastBid, setLastBid] = useState(null);
    const [bid, setBid] = useState(null);
    const [ctc, setCtc] = useState(null);
    const [previousBalance, setPreviousBalance] = useState(null);
    const [latestBalance, setLatestBalance] = useState(null);
    const [lastBidder, setLastBidder] = useState(null);

    const attach = async (ctcInfoStr, nftId) => {
        const { acc } = props;
        const jsonNFTId = JSON.parse(nftId);
        await acc.tokenAccept(jsonNFTId);
        setNFTID(jsonNFTId);
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        setView("Attaching");
        setView("PlaceBid");
        setCtc(ctc);
    }

    const placeBid = async (ctc, bid) => {
        let previousBalance = 0;
        let latestBalance = 0;
        try {
            previousBalance = await getBalance();
            const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
            latestBalance = await getBalance();
            setError(null);
            setView("PlaceBid");
            setCtc(ctc);
            setLastBid(reach.formatCurrency(lastBid));
            setBid(reach.formatCurrency(bid));
            setPreviousBalance(previousBalance);
            setLatestBalance(latestBalance);
            setLastBidder(reach.formatAddress(lastBidder));
        } catch (error) {
            if (error.message.includes("is too low")) {
                setError(error);
                setView("PlaceBid");
                setCtc(ctc);
                setPreviousBalance(previousBalance);
                setLatestBalance(latestBalance);
            } else {
                const amt = await getBalance();
                const amtNFT = await getNFTBalance(nftId);
                setView("Error");
                setAmt(amt);
                setAmtNFT(amtNFT);
            }

        }
    }

    const getBalance = async () => {
        return reach.formatCurrency(await reach.balanceOf(acc));
    }
    const getNFTBalance = async (nftId) => {
        return await acc.balanceOf(nftId);
    }

    switch (view) {
        case 'Attach':
            return <Wrapper content={<Attach parent={{ attach }} />} />
        case 'Attaching':
            return <Wrapper content={<Attaching />} />
        case 'PlaceBid':
            return <Wrapper content={<PlaceBid
                error={error}
                standardUnit={standardUnit}
                ctc={ctc}
                parent={{ placeBid }}
                lastBid={lastBid}
                bid={bid}
                previousBalance={previousBalance}
                latestBalance={latestBalance}
                lastBidder={lastBidder}
            />} />
        case 'Error':
            return <Wrapper content={<Error amt={amt} standardUnit={standardUnit} amtNFT={amtNFT} />} />
        default:
            return (
                <div></div>
            );
    }
}

export default Bidder;