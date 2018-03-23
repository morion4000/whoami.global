import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="main-container">
          <Header/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home
