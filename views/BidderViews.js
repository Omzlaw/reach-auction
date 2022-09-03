import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.PlaceBid = class extends React.Component {
  render() {
    const {
      error,
      standardUnit,
      ctc,
      parent,
      lastBid,
      bid,
      previousBalance,
      latestBalance,
      lastBidder
    } = this.props;
    const bidPlaced = (this.state || {}).bidPlaced;
    return (
      <div>
        Balance before: {previousBalance ? previousBalance : ''} {standardUnit}
        <br />
        Balance after: {latestBalance ? latestBalance : ''} {standardUnit}
        <br />
        Please place your bid
        <br />
        {lastBid ? `You out bid the last bid of ${lastBid} ${standardUnit}` : ''}
        <br />
        {lastBid ? `from ${lastBidder}` : ''}
        <br />
        {bid ? `With a bid of ${bid} ${standardUnit}` : ''}
        <br />
        <input
          required
          type='number'
          onChange={(e) => this.setState({ bidPlaced: e.currentTarget.value })}
        /> micro {standardUnit}
        <br />
        {error ? 'Bid or bid difference is too low, please try again.' : ''}
        <br />
        <button
          onClick={() => parent.placeBid(ctc, bidPlaced)}
        >Place bid</button>
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const { outcome } = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Error = class extends React.Component {
  render() {
    const { amt, standardUnit, amtNFT } = this.props;
    return (
      <div>
        You failed to bid, because the auction is over
        <br/>
        {`You have ${amt} ${standardUnit} and ${amtNFT} NFT`}
      </div>
    );
  }
}

export default exports;