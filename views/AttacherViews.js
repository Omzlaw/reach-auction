import React from 'react';
import BidderViews from './BidderViews';

const exports = { ...BidderViews };

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Attacher">
        <h2>Bidder</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {

  onAttach(parent, ctcInfoStr, nftId) {
    if (!ctcInfoStr || !nftId) {
      alert('Please insert required information')
    } else {
      parent.attach(ctcInfoStr, nftId)
    }
  }
  render() {
    const { parent } = this.props;
    const { ctcInfoStr, nftId } = this.state || {};
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
        Please paste the NFT id to accept:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ nftId: e.currentTarget.value })}
          placeholder=''
        />
        <br />
        <button
          disabled={!ctcInfoStr || !nftId}
          onClick={() => {this.onAttach(parent, ctcInfoStr, nftId)}}
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


export default exports;