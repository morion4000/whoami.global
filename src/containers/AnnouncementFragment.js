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
              <i className="mr-1 icon-cake" />
              <span className="mr-2">Use this handy announcmenet bar to talk about new features</span>
              <a href="#" className="text-white">View changelog ›</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AnnouncementFragment
