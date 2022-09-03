import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Auctioneer">
        <h2>Auctioneer</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {

  onAttach(parent, ctcInfoStr) {
    if (!ctcInfoStr) {
      alert('Please insert required information')
    } else {
      parent.attach(ctcInfoStr)
    }
  }
  render() {
    const { parent } = this.props;
    const { ctcInfoStr } = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ ctcInfoStr: e.currentTarget.value })}
          placeholder=''
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => { this.onAttach(parent, ctcInfoStr) }}
        >Attach</button>
        <br />
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.SetMinimumPrice = class extends React.Component {

  onSetMinimumPrice(parent, minPrice) {
    if (minPrice < 1 || minPrice == null) {
      alert('Minimum price too low, Please try with a higher value (1 and above)');
    } else {
      parent.setMinimumPrice(minPrice);
    }
  }
  render() {
    const { parent, defaultMinPrice, standardUnit } = this.props;
    const minPrice = (this.state || {}).minPrice || defaultMinPrice;
    return (
      <div>
        <input
          required
          type='number'
          placeholder={defaultMinPrice}
          onChange={(e) => this.setState({ minBid: e.currentTarget.value })}
        /> micro {standardUnit}
        <br />
        <button
          onClick={() => { this.onSetMinimumPrice(parent, minPrice) }}
        >Set minimum price</button>
      </div>
    );
  }
}


exports.SetAuctionLength = class extends React.Component {
  onSetAuctionLength(parent, lengthInBlocks) {
    if (lengthInBlocks < 1 || lengthInBlocks == null) {
      alert('Length too low, Please try with a higher value (1 and above)');
    } else {
      parent.setAuctionLength(lengthInBlocks);
    }
  }
  render() {
    const { parent } = this.props;
    const lengthInBlocks = (this.state || {}).lengthInBlocks
    return (
      <div>
        Set Auction length in blocks
        <br />
        <input
          type='number'
          onChange={(e) => this.setState({ lengthInBlocks: e.currentTarget.value })}
        />
        <br />
        <button
          onClick={() => { this.onSetAuctionLength(parent, lengthInBlocks) }}
        >Save</button>
      </div>
    );
  }
}

exports.StartingAuction = class extends React.Component {
  render() {
    return (
      <div>
        Starting Auction...
      </div>
    );
  }
}


exports.WaitingForBidders = class extends React.Component {

  render() {
    return (
      <div>
        Waiting for Bidders to join...
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
      const { winner, amt, standardUnit, parent } = this.props;
      return (
          <div>
              Auction has ended
              <br />
              {winner} won with a bid of {amt} {standardUnit}
              <br />
              <button
                  onClick={(e) => parent.restart()}
              >Restart</button>
          </div>
      );
  }
}

export default exports;