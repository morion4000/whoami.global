import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="bg-dark navbar-dark" data-sticky="top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
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
                    <a href="/profile">No Ethereum Account Detected</a>
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

export default Menu
