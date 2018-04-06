import React, { Component } from 'react';

class AnnouncementFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: this.props.icon || 'icon-warning',
      text: this.props.text || '',
      linkText: this.props.linkText || null,
      linkAddress: this.props.linkAddress || null,
    };
  }

  render() {
    return (
      <section className="space-xs text-center bg-gradient text-light">
        <div className="container">
          <div className="row">
            <div className="col">
              <i className={this.state.icon+' mr-1'} />
              <span className="mr-2">{this.state.text}</span>
              <a href={this.state.linkAddress} className="text-white">{this.state.linkText}</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AnnouncementFragment;
