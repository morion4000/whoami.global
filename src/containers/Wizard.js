import React, { Component } from 'react';

class Wizard extends Component {
  constructor(props) {
    super(props);
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
                {/*end of col*/}
              </div>
              {/*end of row*/}
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
                  {/*end of col*/}
                </div>
                {/*end of row*/}
              </div>
              {/*end of container*/}
            </nav>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="card card-lg">
                    <div className="card-body">
                      <form className="wizard">
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
                                <img alt="Image" src="assets/img/graphic-man-box.svg" className="w-100" />
                              </div>
                              {/*end of col*/}
                              <div className="col-12 col-md-6 col-lg-5 mb-4">
                                <div>
                                  <h6 className="title-decorative mb-2">Step 1.</h6>
                                  <h4 className="mb-2">Choose an Alias</h4>
                                  <p>Your alias will be tied to your identity</p>
                                  <div className="form-group">
                                    <input placeholder="Eg: 'terente'" name="alias" className="form-control form-control-lg" type="text" />
                                  </div>
                                </div>
                                <button className="btn btn-success sw-btn-next" type="button">Next Step</button>
                              </div>
                              {/*end of col*/}
                            </div>
                            {/*end of row*/}
                          </div>
                          <div id="second">
                            <div className="row justify-content-around align-items-center">
                              <div className="col-8 col-md-6 col-lg-4 mb-4">
                                <img alt="Image" src="assets/img/graphic-woman-writing.svg" className="w-100" />
                              </div>
                              {/*end of col*/}
                              <div className="col-12 col-md-6 col-lg-5 mb-4">
                                <div>
                                  <h6 className="title-decorative mb-2">Step 2.</h6>
                                  <h4>Set your Privacy</h4>
                                  <div>
                                    <div className="custom-control custom-checkbox custom-checkbox-switch">
                                      <input className="custom-control-input" defaultValue="true" name="privacy" defaultChecked id="switch-photography" type="checkbox" />
                                      <label className="custom-control-label" htmlFor="switch-photography">Public</label>
                                    </div>
                                  </div>
                                </div>
                                <button className="btn btn-success sw-btn-next mt-4" type="button">Next Step</button>
                              </div>
                              {/*end of col*/}
                            </div>
                            {/*end of row*/}
                          </div>
                          <div id="third">
                            <div className="row justify-content-around align-items-center">
                              <div className="col-8 col-md-6 col-lg-5 mb-4">
                                <img alt="Image" src="assets/img/graphic-man-computer.svg" className="w-100" />
                              </div>
                              {/*end of col*/}
                              <div className="col-12 col-md-6 col-lg-5 mb-4">
                                <div>
                                  <h6 className="title-decorative mb-2">Step 3.</h6>
                                  <h4 className="mb-2">You are all set</h4>
                                  <p>Hit the button below to own your identity.</p>
                                </div>
                                <button className="btn btn-success btn-lg mt-4" type="submit">Claim Identity</button>
                              </div>
                              {/*end of col*/}
                            </div>
                            {/*end of row*/}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-small">Have a change of heart? <a href="/">Skip this</a>
                    </span>
                  </div>
                </div>
                {/*end of col*/}
              </div>
              {/*end of row*/}
            </div>
            {/*end of container*/}
          </section>
          {/*end of section*/}
        </div>
      </div>
    );
  }
}

export default Wizard
