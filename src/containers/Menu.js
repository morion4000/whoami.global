import React, { Component } from 'react';
import contract from 'truffle-contract';

import getWeb3 from './../utils/getWeb3';
import IdentityFactoryContract from '../../build/contracts/IdentityFactory.json';

function DisplayAccount(props) {
  const account = props.accounts.length ? props.accounts[0] : null;
  const username = props.username;

  if (username) {
    return (
      <a href="/profile">{username}</a>
    );
  } else if (account) {
    const short_account = account.substr(0, 5) + '...' + account.substr(-5, 5);

    return (
      <a href="/wizard" title={account}>{short_account}</a>
    );
  } else {
    return (
      <a href="#">No Ethereum Account</a>
    );
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      accounts: [],
      username: null
    };
  }

  componentWillMount() {
    const identityFactory = contract(IdentityFactoryContract);

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        identityFactory.setProvider(this.state.web3.currentProvider);

        identityFactory.deployed().then((instance) => {
          this.state.web3.eth.getAccounts((error, accounts) => {
            this.setState({
              accounts: accounts
            });

            instance.getOwnerIdentity.call({
              from: accounts[0]
            }).then((res, err) => {
              if (err || !res.length) {
                return;
              }

              const username = res[0];

              if (username !== '') {
                this.setState({
                  username: username
                });
              }
            })
          });
        });
      });
  }

  render() {
    return (
      <div className="nav-container">
        <div className="bg-dark navbar-dark" data-sticky="top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img alt="Whoami" src="assets/img/logo-white.svg" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="icon-menu h4" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/features" className="nav-link">Overview</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown">Features</a>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                      <a className="dropdown-item" href="/features/kyc">
                        <span className="h6 mb-0">KYC</span>
                        <p className="text-small text-muted">Know your customer verification</p>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="/features/proofs">
                        <span className="h6 mb-0">Proofs</span>
                        <p className="text-small text-muted">Proove that you are who you say you are</p>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="/features/signing">
                        <span className="h6 mb-0">Signing</span>
                        <p className="text-small text-muted">Sign messages with your private key</p>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <DisplayAccount accounts={this.state.accounts} username={this.state.username} />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
