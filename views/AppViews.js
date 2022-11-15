import React, { useState } from 'react';

export const Wrapper = (props) => {
  const { content } = props;
  return (
    <div className="App">
      <header className="text-xl App-header" id="root">
        <h1>NFT Auction</h1>
        {content}
      </header>
    </div>
  );
}

export const Welcome = (props) => {
  const { parent } = props;
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

export const TypeAccountSecret = (props) => {
  const [state, setState] = useState(null);
  const secret = (state || {}).secret;
  const { parent } = props;
  return (
    <div>
      Type account secret
      <br />
      <input
        onChange={(e) => setState({ secret: e.currentTarget.value })}
      />
      <br />
      <button onClick={() => parent.createAccountFromSecret(secret)}>Link</button>
    </div>
  );
}

export const ConnectAccount = () => {
  return (
    <div>
      Please wait while we connect to your account.
      If this takes more than a few seconds, there may be something wrong.
    </div>
  )
}

export const FundAccount = (props) => {

  const [state, setState] = useState(null);
  const { bal, standardUnit, defaultFundAmt, parent } = props;
  const amt = (state || {}).amt || defaultFundAmt;


  const onFundAccount = (parent, amt) => {
    if (amt < 1 || amt == null) {
      alert('Amount too low, Please try with a higher value (1 and above)');
    } else {
      parent.fundAccount(amt);
    }
  }

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
        onChange={(e) => setState({ amt: e.currentTarget.value })}
      /> micro {standardUnit}
      <button onClick={() => { onFundAccount(parent, amt) }}>Fund Account</button>
      <button onClick={() => parent.skipFundAccount()}>Skip</button>
    </div>
  );
}


export const OwnerAuctioneerOrBidder = (props) => {
  const { parent } = props;
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
        <br /> Set the minimum price, deploy the contract.
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
