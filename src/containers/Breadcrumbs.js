import React, { Component } from 'react';

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLevelText: this.props.currentLevelText
    };
  }

  render() {
    return (
      <nav aria-label="breadcrumb" role="navigation" className="bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{this.state.currentLevelText}</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Breadcrumbs;
