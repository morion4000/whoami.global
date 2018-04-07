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
      installed: false
    };
  }

  componentWillMount() {
    getWeb3.then(this.ready.bind(this));
  }

  ready() {
    this.setState({
      installed: window.web3.currentProvider.isMetaMask
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
