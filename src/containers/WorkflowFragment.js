import React, { Component } from 'react';

class WorkflowFragment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row justify-content-center text-center section-intro">
            <div className="col-12 col-md-9 col-lg-8">
              <span className="title-decorative">Monetize your data</span>
              <h2 className="display-4">Get payed for your data</h2>
              <span className="lead">Give access to third-parties to your data and charge a fee for it to be used</span>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-md-5 col-7 mb-4">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="content-1" role="tabpanel" arialabelledby="content-1-tab">
                  <img alt="Image" className="img-fluid w-100" src="assets/img/if_50_2529962.svg" />
                </div>
                <div className="tab-pane fade" id="content-2" role="tabpanel" arialabelledby="content-2-tab">
                  <img alt="Image" className="img-fluid w-100" src="assets/img/if_45_2529966.svg" />
                </div>
                <div className="tab-pane fade" id="content-3" role="tabpanel" arialabelledby="content-3-tab">
                  <img alt="Image" className="img-fluid w-100" src="assets/img/if_43_2529969.svg" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 mb-4">
              <ul className="nav" role="tablist">
                <li>
                  <div className="card active" data-toggle="tab" href="#content-1" role="tab" aria-controls="content-1" aria-selected="true">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="step-circle mr-4">1</div>
                        <div className="media-body">
                          <h5>Create an identity</h5>
                          <span>
                            Link your Ethereum account to an identity on the blockchain, using Metamask
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card" data-toggle="tab" href="#content-2" role="tab" aria-controls="content-2" aria-selected="false">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="step-circle mr-4">2</div>
                        <div className="media-body">
                          <h5>Get identity verified</h5>
                          <span>
                            Submit official documents and appoint one of our oracles to verify them for a fee
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card" data-toggle="tab" href="#content-3" role="tab" aria-controls="content-3" aria-selected="false">
                    <div className="card-body">
                      <div className="media align-items-center">
                        <div className="step-circle mr-4">3</div>
                        <div className="media-body">
                          <h5>Share with third-parties</h5>
                          <span>
                            Services that pay a fee get access to your verified documents and data
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkflowFragment
