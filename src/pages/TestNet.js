import React, { Component } from 'react';

import Menu from '../containers/Menu.js';
import SubHeader from '../containers/SubHeader.js';
import FooterSmall from '../containers/FooterSmall.js';
import Breadcrumbs from '../containers/Breadcrumbs.js';


class TestNet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="main-container">
          <Breadcrumbs currentLevelText="Testnet" />
          <SubHeader title="Testnet" subTitle="How to use the Testnet and get Ether from a faucet" author="Ionut Moraru" authorTitle="Software Developer" />

          <section className="space-sm">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-12 col-md-8 col-lg-7">
                  <article>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <a href="#">labore et dolore</a> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                    </p>
                    <h5>Step One: Do this thing</h5>
                    <figure className="figure">
                      <img alt="Image" src="assets/img/article-knowledge-1.jpg" className="img-fluid figure-img" />
                      <figcaption className="figure-caption">Figure one: Mission Control panel</figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between">
                          <div><i className="icon-text-document mr-1" /> Created</div>
                          <span>17/11/2017</span>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between">
                          <div><i className="icon-edit mr-1" /> Last updated</div>
                          <span>23/12/2017</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <FooterSmall/>
      </div>
    );
  }
}

export default TestNet;
