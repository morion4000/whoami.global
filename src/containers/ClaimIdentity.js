import React, { Component } from 'react';

class ClaimIdentity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form action="/wizard" method="GET">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control form-control-lg" id="username" aria-describedby="usernameHelp" placeholder="Pick an username" type="text" name="username" />
            </div>
            {/*
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input className="custom-control-input" defaultValue="agree" name="agree-terms" id="check-agree" type="checkbox" />
                <label className="custom-control-label text-small" htmlFor="check-agree">I agree to the <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
            </div>
            */}
            <button type="submit" className="btn btn-lg btn-success btn-block">Claim Whoami Identity</button>
          </form>
        </div>
      </div>
   );
 }
}

export default ClaimIdentity;
