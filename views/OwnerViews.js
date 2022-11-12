import React, { useState } from 'react';

const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = (props) => {
    const { content } = props;
    return (
        <div className="Owner">
            <h2>Owner</h2>
            {content}
        </div>
    );
}

exports.SetNFT = (props) => {
    const [state, setState] = useState();
    const { parent } = props;
    const nftId = (state || {}).nftId
    return (
        <div>
            Set nft id to auction
            <br />
            <input
                type='text'
                onChange={(e) => setState({ nftId: e.currentTarget.value })}
            />
            <br />
            <button
                onClick={() => parent.setMyNFT(nftId)}
            >Save</button>
            <br />
            OR
            <br />
            <button onClick={() => parent.setDemoNFT()}>Use demo NFT</button>
        </div>
    );
}

exports.Deploy = (props) => {
    const { parent } = props;
    return (
        <div>
            <br />
            <button
                onClick={() => parent.deploy()}
            >Deploy</button>
        </div>
    );
}

exports.Deploying = () => {
    return (
        <div>Deploying... please wait.</div>
    );
}


exports.WaitingForAuctionToStart = (props) => {

    const copyToClipboard = async (button, value) => {
        navigator.clipboard.writeText(value);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }
    const copyContractInfoToClipboard = async (button) => {
        const { ctcInfoStr } = props;
        copyToClipboard(button, ctcInfoStr);
    }

    const copyNFTIdToClipboard = async (button) => {
        const { nftId } = props;
        copyToClipboard(button, nftId);
    }

    const { ctcInfoStr, nftId } = props;
    return (
        <div>
            Waiting for Bidders to join...
            <br /> Please give them this contract info:
            <pre className=''>
                {ctcInfoStr}
            </pre>
            <button
                onClick={(e) => copyContractInfoToClipboard(e.currentTarget)}
            >Copy to clipboard</button>
            <br />
            <br />
            And also the NFT id
            <pre className=''>
                {nftId}
            </pre>
            <button
                onClick={(e) => copyNFTIdToClipboard(e.currentTarget)}
            >Copy to clipboard</button>
            <br />

        </div>
    )
}

exports.SeeBid = (props) => {
    const { who, amt, standardUnit } = props;
    return (
        <div>
            Bidding in progress
            <br />
            {who} decided to bid {amt} {standardUnit}
        </div>
    );
}


exports.ShowOutcome = (props) => {
    const { winner, amt, standardUnit, parent, balance, amtNFT } = props;
    return (
        <div>
            Auction has ended
            <br />
            {winner} won with a bid of {amt} {standardUnit}
            <br />
            {`You have ${balance} ${standardUnit} and ${amtNFT} NFT`}
            <br />
            <button
                onClick={(e) => parent.restart()}
            >Restart</button>
        </div>
    );
}

export default exports;