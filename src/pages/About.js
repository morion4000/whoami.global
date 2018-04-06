import React, { Component } from 'react';

import Menu from '../containers/Menu.js';
import Header from '../containers/Header.js';
import Footer from '../containers/Footer.js';


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="main-container">
          <Header/>
          Hello World
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About
