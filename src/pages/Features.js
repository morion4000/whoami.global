import React, { Component } from 'react';

import Menu from '../containers/Menu.js';
import Header from '../containers/Header.js';
import FooterSmall from '../containers/FooterSmall.js';


class Features extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="main-container">
          <Header/>
          features
        </div>
        <FooterSmall/>
      </div>
    );
  }
}

export default Features;
