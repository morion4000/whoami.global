import React, { Component } from 'react';
import getWeb3 from './../utils/getWeb3';
import Metamask from '../components/Metamask.js';
import IdentityFactoryContract from '../../build/contracts/IdentityFactory.json';
import DocumentFactoryContract from '../../build/contracts/DocumentFactory.json';

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.location.query.username || null,
      public: this.props.location.query.public || false,
      web3: null,
      identityFactoryInstance: null,
      documentFactoryInstance: null,
      accounts: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3,
        });

        const contract = require('truffle-contract');
        const identityFactory = contract(IdentityFactoryContract);
        const documentFactory = contract(DocumentFactoryContract);

        identityFactory.setProvider(this.state.web3.currentProvider);
        documentFactory.setProvider(this.state.web3.currentProvider);

        identityFactory.deployed().then((instance) => {
          this.setState({
            identityFactoryInstance: instance
          });
        });

        documentFactory.deployed().then((instance) => {
          //window.documentFactory = instance;

          this.setState({
            documentFactoryInstance: instance
          });
        });

        this.state.web3.eth.getAccounts((error, accounts) => {
          this.setState({
            accounts: accounts
          });
        });
      })
      .catch(() => {
        console.error('Error finding web3.');
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.accounts[0]);

    var batch = this.state.web3.createBatch();

    batch.add(this.state.identityFactoryInstance.createIdentity({
      from: this.state.accounts[0]
    }));

    batch.add(this.state.documentFactoryInstance.createDocument('username', this.state.username, {
      from: this.state.accounts[0]
    }));

    batch.add(this.state.documentFactoryInstance.createDocument('public', this.state.public, {
      from: this.state.accounts[0]
    }));

    batch.execute();
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <section className="space-sm">
            <div className="container">
              <div className="row mb-4">
                <div className="col text-center">
                  <a href="#">
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
