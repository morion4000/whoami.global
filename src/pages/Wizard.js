import React, { Component } from 'react';
import contract from 'truffle-contract';

import getWeb3 from './../utils/getWeb3';
import AnnouncementFragment from '../containers/AnnouncementFragment.js';
import Web3, { getNetworkName, currentNetwork } from '../containers/Web3.js';
import Metamask from '../containers/Metamask.js';
import IdentityFactory from '../components/IdentityFactory.js';
import DocumentFactory from '../components/DocumentFactory.js';

function ProviderWarningMessage(props) {
  const network = getNetworkName(props.network);
  const metamask = props.metamask;

  if (metamask) {
    if (network !== currentNetwork) {
      return (
        <div>
          <AnnouncementFragment icon="icon-warning" text={"Please point Metamask to " + currentNetwork +" testnet."} linkText="Read More ›" linkAddress="/testnet" />
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  } else {
    return (
      <AnnouncementFragment icon="icon-warning" text="Please install Metamask." linkText="Read More ›" linkAddress="/testnet" />
    );
  }
}


class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.location.query.username || null,
      public: this.props.location.query.public || false,
      identityFactoryInstance: null,
      documentFactoryInstance: null,
      accounts: [],
      metamask: false,
      network: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    getWeb3.then(this.ready.bind(this));
  }

  ready() {
    this.setState({
      metamask: window.web3.currentProvider.isMetaMask,
      network: window.web3.version.network,
      accounts: window.web3.eth.accounts,
      identityFactoryInstance: new IdentityFactory(window.web3),
      documentFactoryInstance: new DocumentFactory(window.web3)
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var batch = window.web3.createBatch();

    batch.add(this.state.identityFactoryInstance.create(this.state.username));
    batch.add(this.state.documentFactoryInstance.create('public', this.state.public));

    batch.execute();
  }

  render() {
    return (
      <div>
        <ProviderWarningMessage network={this.state.network} metamask={this.state.metamask} />

        <div className="main-container">
          <section className="space-sm">
            <div className="container">
              <div className="row mb-4">
                <div className="col text-center">
                  <a href="/">
                    <img alt="Image" src="assets/img/logo-gray.svg" />
                  </a>
                </div>
              </div>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Claim Identity</li>
                    </ol>
                  </div>
                </div>
              </div>
            </nav>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="card card-lg">
                    <div className="card-body">
                      <form className="wizard" onSubmit={this.handleSubmit}>
                        <ul className="nav nav-tabs text-center row justify-content-center">
                          <li className="col-3 col-md-2"><a href="#first" className="step-circle step-circle-sm">1</a>
                          </li>
                          <li className="col-3 col-md-2"><a href="#second" className="step-circle step-circle-sm">2</a>
                          </li>
                          <li className="col-3 col-md-2"><a href="#third" className="step-circle step-circle-sm">3</a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div id="first">
                            <div className="row justify-content-around align-items-center">
                              <div className="col-8 col-md-6 col-lg-4 mb-4">
                                <img alt="Image" src="assets/img/if_Username_372902.svg" className="w-100" />
                              </div>
                              <div className="col-12 col-md-6 col-lg-5 mb-4">
                                <div>
                                  <h6 className="title-decorative mb-2">Step 1.</h6>
                                  <h4 className="mb-2">Choose an Username</h4>
                                  <p>Your username will be tied to your identity</p>
                                  <div className="form-group">
                                    <input placeholder="Eg: 'terente'" name="username" className="form-control form-control-lg" type="text" value={this.state.username} />
                                  </div>
                                </div>
                                <button className="btn btn-success sw-btn-next" type="button">Next Step</button>
                              </div>
                            </div>
                          </div>
                          <div id="second">
                            <div className="row justify-content-around align-items-center">
                              <div className="col-8 col-md-6 col-lg-4 mb-4">
                                <img alt="Image" src="assets/img/if_Password_372910.svg" className="w-100" />
                              </div>
                              <div className="col-12 col-md-6 col-lg-5 mb-4">
                                <div>
                                  <h6 className="title-decorative mb-2">Step 2.</h6>
                                  <h4 className="mb-2">Set your Privacy</h4>
                                  <p>Choose the privacy mode of your identity</p>
                                  <div>
                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                      <input className="custom-control-input" defaultValue={this.state.public} name="public" defaultChecked id="switch-photography" type="checkbox" value={this.state.public} />
                                      <label className="custom-control-label" htmlFor="switch-photography">Public</label>
                                    </div>
                                  </div>
                                </div>
                                <button className="btn btn-success sw-btn-next mt-4" type="button">Next Step</button>
                              </div>
                            </div>
                          </div>
                          <div id="third">
                            <div className="row justify-content-around align-items-center">
                              <div className="col-8 col-md-6 col-lg-4 mb-4">
                                <img alt="Image" src="assets/img/if_Bookmark_372898.svg" className="w-100" />
                              </div>
                              <div className="col-12 col-md-6 col-lg-5 mb-4">
                                <div>
                                  <h6 className="title-decorative mb-2">Step 3.</h6>
                                  <h4 className="mb-2">Almost there</h4>
                                  <Metamask/>
                                </div>
                                <button className="btn btn-success btn-lg mt-4" type="submit">Claim Identity</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-small">Changed your mind? <a href="/">Skip this</a>
                    </span>
                  </div>

                  <Web3 />

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Wizard;
