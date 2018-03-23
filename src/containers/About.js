import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';
//import './About.css';

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
