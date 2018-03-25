import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="main-container">
          <section className="height-100 bg-dark">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <i className="icon-compass display-4" />
                  <h1 className="h2">Uhoh, page not found (404)</h1>
                  <span>The page you requested couldnt be found. <a href="/" className="text-white">Go back home</a> or <a href="#" className="text-white">Contact us</a> if you think this might be a mistake.</span>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default NotFound
