import React, { Component } from 'react';
import ClaimIdentity from './ClaimIdentity.js';

class Header extends Component {
  render() {
    return (
      <section className="bg-dark space-lg">
        <img alt="Image" src="assets/img/graphic-bg-clouds-2.png" className="bg-image" />
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5 section-intro">
              <h1 className="display-3">Identity on Blockchain</h1>
              <span className="lead">
                Pay to get identity verified, get payed when its used.
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <ClaimIdentity/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
