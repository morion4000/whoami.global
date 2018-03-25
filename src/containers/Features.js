import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import FooterSmall from './FooterSmall.js';

//import './Features.css';

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

export default Features
