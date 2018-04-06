import React, { Component } from 'react';

class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      subTitle: this.props.subTitle,
      author: this.props.author,
      authorTitle: this.props.authorTitle,
    };
  }

  render() {
    return (
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4">{this.state.title}</h1>
              <span className="lead">{this.state.subTitle}</span>
              <div className="media blog-post-author">
                <div className="media-body">
                  <span className="h6">{this.state.author}</span>
                  <span className="text-small">{this.state.authorTitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SubHeader;
