import React, { useState } from 'react';

export const Wrapper = (props) => {
  const { content } = props;
  return (
    <div className="Auctioneer">
      <h2>Auctioneer</h2>
      {content}
    </div>
  );
}

export const Attach = (props) => {

  const [state, setState] = useState();
  const { parent } = props;
  const { ctcInfoStr } = state || {};

  const onAttach = (parent, ctcInfoStr) => {
    if (!ctcInfoStr) {
      alert('Please insert required information')
    } else {
      parent.attach(ctcInfoStr)
    }
  }
  return (
    <div>
      Please paste the contract info to attach to:
      <br />
      <textarea spellCheck="false"
        className='ContractInfo'
        onChange={(e) => setState({ ctcInfoStr: e.currentTarget.value })}
        placeholder=''
      />
      <br />
      <button
        disabled={!ctcInfoStr}
        onClick={() => { onAttach(parent, ctcInfoStr) }}
      >Attach</button>
      <br />
    </div>
  );
}

export const Attaching = () => {
  return (
    <div>
      Attaching, please wait...
    </div>
  );
}

export const SetMinimumPrice = (props) => {

  const [state, setState] = useState();
  const { parent, defaultMinPrice, standardUnit } = props;
  const minPrice = (state || {}).minPrice || defaultMinPrice;

  const onSetMinimumPrice = (parent, minPrice) => {
    if (minPrice < 1 || minPrice == null) {
      alert('Minimum price too low, Please try with a higher value (1 and above)');
    } else {
      parent.setMinimumPrice(minPrice);
    }
  }
  return (
    <div>
      <input
        required
        type='number'
        placeholder={defaultMinPrice}
        onChange={(e) => setState({ minPrice: e.currentTarget.value })}
      /> micro {standardUnit}
      <br />
      <button
        onClick={() => { onSetMinimumPrice(parent, minPrice) }}
      >Set minimum price</button>
    </div>
  );
}

export const SetMinimumBidDiff = (props) => {

  const [state, setState] = useState();
  const { parent, defaultMinBidDiff, standardUnit } = props;
  const minBidDiff = (state || {}).minBidDiff || defaultMinBidDiff;

  const onSetMinimumBidDiff = (parent, minBidDiff) => {
    if (minBidDiff < 1 || minBidDiff == null) {
      alert('Minimum bid value too low, Please try with a higher value (1 and above)');
    } else {
      parent.setMinimumBidDiff(minBidDiff);
    }
  }
  return (
    <div>
      <input
        required
        type='number'
        placeholder={defaultMinBidDiff}
        onChange={(e) => setState({ minBidDiff: e.currentTarget.value })}
      /> micro {standardUnit}
      <br />
      <button
        onClick={() => { onSetMinimumBidDiff(parent, minBidDiff) }}
      >Set minimum bid difference</button>
    </div>
  );
}


export const SetAuctionLength = (props) => {

  const [state, setState] = useState();
  const { parent } = props;
  const lengthInBlocks = (state || {}).lengthInBlocks

  const onSetAuctionLength = (parent, lengthInBlocks) => {
    if (lengthInBlocks < 1 || lengthInBlocks == null) {
      alert('Length too low, Please try with a higher value (1 and above)');
    } else {
      parent.setAuctionLength(lengthInBlocks);
    }
  }
  return (
    <div>
      Set Auction length in blocks
      <br />
      <input
        type='number'
        onChange={(e) => setState({ lengthInBlocks: e.currentTarget.value })}
      />
      <br />
      <button
        onClick={() => { onSetAuctionLength(parent, lengthInBlocks) }}
      >Save</button>
    </div>
  );
}

export const StartingAuction = () => {
  return (
    <div>
      Starting Auction...
    </div>
  );
}


export const WaitingForBidders = () => {

  return (
    <div>
      Waiting for Bidders to join...
    </div>
  )
}

export const SeeBid = (props) => {
  const { who, amt, standardUnit } = props;
  return (
    <div>
      Bidding in progress
      <br />
      {who} decided to bid {amt} {standardUnit}
    </div>
  );
}


export const ShowOutcome = (props) => {
  const { winner, amt, standardUnit, parent } = props;
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
