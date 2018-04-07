import React, { Component } from 'react';

import getWeb3 from './../utils/getWeb3';

const currentNetwork = 'Rinkeby';

function getNetworkName(id) {
  let name;

  switch(id) {
    case '1':
     name = 'Mainnet';
    break;

    case '2':
      name = 'Morden';
    break;

    case '3':
      name = 'Ropsten';
    break;

    case '4':
      name = 'Rinkeby';
    break;

    case '42':
      name = 'Kovan';
    break;

    default:
      name = 'Unknown';
  }

  return name;
}

function Web3Message(props) {
  const metamask = props.metamask;
  const network = getNetworkName(props.network);

  if (metamask) {
    if (network === currentNetwork) {
      return (
        <div>
          <span className="badge badge-success badge-indicator"></span>
          &nbsp;Connected on {currentNetwork}
        </div>
      );
    } else {
      return (
        <div>
          <span className="badge badge-warning badge-indicator"></span>
          &nbsp;Connected on {network}
          <a href="/testnet"><i className="icon-flash" title="Click for more information" /></a>
        </div>
      );
    }
  } else {
    return (
      <div>
        <span className="badge badge-danger badge-indicator"></span>
        &nbsp;Not connected
        <a href="/testnet"><i className="icon-flash" title="Click for more information" /></a>
      </div>
    );
  }
}

class Web3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      metamask: false,
      network: null,
      accounts: []
    };
  }

  componentWillMount() {
    getWeb3.then(this.ready.bind(this));
  }

  ready() {
    this.setState({
      metamask: window.web3.currentProvider.isMetaMask,
      network: window.web3.version.network,
      accounts: window.web3.eth.accounts
    });
  }

  render() {
    return (
      <div id="web3-container">
        <Web3Message metamask={this.state.metamask} network={this.state.network} />
      </div>
    );
  }
}

export default Web3;
