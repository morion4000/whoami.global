import React, { Component } from 'react';

class AnnouncementFragment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="space-xs text-center bg-gradient text-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <i className="mr-1 icon-warning" />
              <span className="mr-2">The application is in alpha and running on the Ethereum testnet (Rinkeby).</span>
              <a href="/changelog" className="text-white">View changelog ›</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AnnouncementFragment
