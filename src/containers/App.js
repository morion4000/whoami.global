import React, { Component } from 'react';
import WhoamiContract from '../../build/contracts/Whoami.json';
import getWeb3 from './../utils/getWeb3';

import './../css/oswald.css';
import './../css/open-sans.css';
import './../css/pure-min.css';
import './App.css';

var accounts = [];
var web3;
var whoamiInstance;
var ipfs;

const contract = require('truffle-contract');
const IPFS = require('ipfs-mini');
const whoami = contract(WhoamiContract);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: null,
      documents: [],
      accounts: []
    };

    this.createIdentity = this.createIdentity.bind(this);
    this.createAttribute = this.createAttribute.bind(this);
    this.createDocument = this.createDocument.bind(this);
  }

  createIdentity(e) {
    whoamiInstance.createIdentity({from: this.state.accounts[0]})
    .then((result) => {
      console.log(result);
    });
  }

  createAttribute(e) {
    whoamiInstance.createDocument('name', 'Ionut Moraru', {from: this.state.accounts[0]})
    .then((result) => {
      console.log(result);
    });
  }

  createDocument(e) {
    const _this = this;

    ipfs.add('Ionut Moraru', (err, hash) => {
      console.log(err, hash);

      whoamiInstance.createDocument('ipfs', hash, {
        from: _this.state.accounts[0]
      })
      .then((result) => {
        console.log(result);
      });
    });
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      web3 = results.web3;

      // Instantiate contract once web3 provided.
      this.instantiateContract();
    })
    .catch(() => {
      console.log('Error finding web3.');
    });
  }

  instantiateContract() {
    whoami.setProvider(web3.currentProvider);

    // Get accounts.
    web3.eth.getAccounts((error, _accounts) => {
      this.setState({
        accounts: _accounts
      });
    });

    ipfs = new IPFS({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https'
    });

    whoami.deployed().then((instance) => {
      whoamiInstance = instance;

      return whoamiInstance.getOwnerIdentity.call({from:this.state.accounts[0]});
    }).then((result) => {
      console.log(result);

      if (result.length > 0) {
        const created = result[1];

        this.setState({
          identity: new Date(Number(created)*1000).toString()
        });
      }

      return whoamiInstance.getDocumentsByOwner.call(this.state.accounts[0]);
    }).then((result) => {
      console.log(result);

      this.setState({
        documents: result
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Whoami</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Metamask</h1>
              <p>Your Metamask is installed and ready.</p>
              <h2>Your identity</h2>
              <p>The current account is: <b>{this.state.accounts[0]}</b></p>

              <p>Identity created: <b>{this.state.identity}</b></p>

              <button onClick={this.createIdentity}>Create Identity</button>
              |
              <button onClick={this.createAttribute}>Create Attribute</button>
              |
              <button onClick={this.createDocument}>Create Document</button>

              <ul>
                {this.state.documents.map((document) =>
                  <li>{Number(document)}</li>
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
