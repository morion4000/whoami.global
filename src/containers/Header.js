import React, { Component } from 'react';

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
                Pay to get identity verified, get payed to get your data used.
              </span>
            </div>
            {/*end of col*/}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername">Username</label>
                      <input className="form-control form-control-lg" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Pick a username" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail">Email address</label>
                      <input className="form-control form-control-lg" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" type="email" />
                      <small id="emailHelp" className="form-text">Well never share your email with anyone else.</small>
                    </div>
                    <div className="mb-3">
                      <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" defaultValue="agree" name="agree-terms" id="check-agree" type="checkbox" />
                        <label className="custom-control-label text-small" htmlFor="check-agree">I agree to the <a href="#">Terms &amp; Conditions</a>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-lg btn-success btn-block">Claim Whoami Identity</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header
