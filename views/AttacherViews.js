import React, { useState } from 'react';
import BidderViews from './BidderViews';

const exports = { ...BidderViews };

exports.Wrapper = (props) => {
  const { content } = props;
  return (
    <div className="Attacher">
      <h2>Bidder</h2>
      {content}
    </div>
  );
}

exports.Attach = (props) => {

  const [state, setState] = useState();
  const { parent } = props;
  const { ctcInfoStr, nftId } = state || {};

  const onAttach = (parent, ctcInfoStr, nftId) => {
    if (!ctcInfoStr || !nftId) {
      alert('Please insert required information')
    } else {
      parent.attach(ctcInfoStr, nftId)
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
      Please paste the NFT id to accept:
      <br />
      <textarea spellCheck="false"
        className='ContractInfo'
        onChange={(e) => setState({ nftId: e.currentTarget.value })}
        placeholder=''
      />
      <br />
      <button
        disabled={!ctcInfoStr || !nftId}
        onClick={() => { onAttach(parent, ctcInfoStr, nftId) }}
      >Attach</button>
      <br />
    </div>
  );
}

exports.Attaching = () => {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
}


export default exports;