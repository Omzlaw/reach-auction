import React from 'react';

const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Creator">
        <h2>Creator</h2>
        {content}
      </div>
    );
  }
}

exports.SetMinimumBid = class extends React.Component {
  render() {
    const {parent, defaultMinBid, standardUnit} = this.props;
    const minBid = (this.state || {}).minBid || defaultMinBid;
    return (
      <div>
        <input
          required
          type='number'
          placeholder={defaultMinBid}
          onChange={(e) => this.setState({minBid: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setMinimumBid(minBid)}
        >Set minimum bid</button>
      </div>
    );
  }
}


// exports.SetNFTId = class extends React.Component {
//   render() {
//     const {parent} = this.props;
//     const nftId = (this.state || {}).nftId
//     return (
//       <div>
//         <input
//           type='string'
//           onChange={(e) => this.setState({nftId: e.currentTarget.value})}
//         />
//         <br />
//         <button
//           onClick={() => parent.setNftId(nftId)}
//         >Set nft id to auction</button>
//       </div>
//     );
//   }
// }

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
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

exports.WaitingForBidders = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Bidders to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;