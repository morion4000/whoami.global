import React, { Component } from 'react';
import getWeb3 from './../utils/getWeb3';

function MetamaskMessage(props) {
  const installed = props.installed;

  if (installed) {
    return (
      <div>
        Metamask is installed and ready.
      </div>
    );
  } else {
    return (
      <div className="warning">
        Metamask is not installed. Install it <a href="https://metamask.io/" target="_blank">here</a>.
      </div>
    );
  }
}

class Metamask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      web3: null,
      installed: false
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        const web3 = results.web3;

        this.setState({
          web3: web3,
          installed: web3.currentProvider.isMetaMask
        });
      })
      .catch(() => {
        console.error('Error finding web3.');
      });
  }

  render() {
    return (
      <div className="Metamask">
        <center>
          <img src="assets/img/metamask.png" width="150" />
        </center>
        <br />
        <MetamaskMessage installed={this.state.installed} />
      </div>
    );
  }
}

export default Metamask;
