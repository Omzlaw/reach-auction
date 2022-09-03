import React from 'react';

const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="Owner">
                <h2>Owner</h2>
                {content}
            </div>
        );
    }
}

exports.SetNFT = class extends React.Component {
    render() {
        const { parent } = this.props;
        const nftId = (this.state || {}).nftId
        return (
            <div>
                Set nft id to auction
                <br />
                <input
                    type='text'
                    onChange={(e) => this.setState({ nftId: e.currentTarget.value })}
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
}

exports.Deploy = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <div>
                <br />
                <button
                    onClick={() => parent.deploy()}
                >Deploy</button>
            </div>
        );
    }
}

exports.Deploying = class extends React.Component {
    render() {
        return (
            <div>Deploying... please wait.</div>
        );
    }
}


exports.WaitingForAuctionToStart = class extends React.Component {

    async copyToClipboard(button, value) {
        navigator.clipboard.writeText(value);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }
    async copyContractInfoToClipboard(button) {
        const { ctcInfoStr } = this.props;
        this.copyToClipboard(button, ctcInfoStr);
    }

    async copyNFTIdToClipboard(button) {
        const { nftId } = this.props;
        this.copyToClipboard(button, nftId);
    }

    render() {
        const { ctcInfoStr, nftId } = this.props;
        return (
            <div>
                Waiting for Bidders to join...
                <br /> Please give them this contract info:
                <pre className=''>
                    {ctcInfoStr}
                </pre>
                <button
                    onClick={(e) => this.copyContractInfoToClipboard(e.currentTarget)}
                >Copy to clipboard</button>
                <br />
                <br />
                And also the NFT id
                <pre className=''>
                    {nftId}
                </pre>
                <button
                    onClick={(e) => this.copyNFTIdToClipboard(e.currentTarget)}
                >Copy to clipboard</button>
                <br />

            </div>
        )
    }
}

exports.SeeBid = class extends React.Component {
    render() {
        const { who, amt, standardUnit } = this.props;
        return (
            <div>
                Bidding in progress
                <br />
                {who} decided to bid {amt} {standardUnit}
            </div>
        );
    }
}


exports.ShowOutcome = class extends React.Component {
    render() {
        const { winner, amt, standardUnit, parent, balance, amtNFT } = this.props;
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
}

export default exports;