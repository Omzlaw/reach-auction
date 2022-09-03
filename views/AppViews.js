import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header className="text-xl App-header" id="root">
          <h1>NFT Auction</h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.Welcome = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <div>
        Welcome to the NFT Auction app!!!
        <br />
        Would you like to create an account?
        <br />
        <button onClick={() => parent.createTestAccount()}>Yes</button>
        <button onClick={() => parent.typeAccountSecret()}>No</button>
      </div>
    );
  }
}

exports.TypeAccountSecret = class extends React.Component {
  render() {
    const secret = (this.state || {}).secret;
    const { parent } = this.props;
    return (
      <div>
        Type account secret
        <br />
        <input
          onChange={(e) => this.setState({ secret: e.currentTarget.value })}
        />
        <br />
        <button onClick={() => parent.createAccountFromSecret(secret)}>Link</button>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
        If this takes more than a few seconds, there may be something wrong.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {

  onFundAccount(parent, amt) {
    if (amt < 1 || amt == null) {
      alert('Amount too low, Please try with a higher value (1 and above)');
    } else {
      parent.fundAccount(amt);
    }
  }

  render() {
    const { bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({ amt: e.currentTarget.value })}
        />
        <button onClick={() => { this.onFundAccount(parent, amt) }}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}


exports.OwnerAuctioneerOrBidder = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectOwner()}
          >Owner</button>
          <br /> Set NFT.
        </p>
        <p>
          <button
            onClick={() => parent.selectAuctioneer()}
          >Auctioneer</button>
          <br /> Set the minimum bid, deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectBidder()}
          >Bidder</button>
          <br /> Attach to the Creator's contract.
        </p>
      </div>
    );
  }
}

export default exports;