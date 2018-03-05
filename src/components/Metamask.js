import React, { Component } from 'react';
import getWeb3 from './../utils/getWeb3';

import './Metamask.css';

class Metamask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      errors: [],
      web3: null
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="Metamask">
        <h1>Metamask</h1>
        <p>Your Metamask is installed and ready.</p>
      </div>
    );
  }
}

export default Metamask
