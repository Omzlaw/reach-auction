import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.PlaceBid = class extends React.Component {
  render() {
    const {
      standardUnit,
      ctc,
      parent,
      lastBid,
      bid,
      previousBalance,
      latestBalance
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
        {bid ? `With a bid of ${bid} ${standardUnit}` : ''}
        <br />
        <input
          required
          type='number'
          onChange={(e) => this.setState({ bidPlaced: e.currentTarget.value })}
        /> {standardUnit}
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
    const { error } = this.props;
    return (
      <div>
        You failed to bid, because the auction is over
        <br />
        {`${error.message}`}
      </div>
    );
  }
}

export default exports;