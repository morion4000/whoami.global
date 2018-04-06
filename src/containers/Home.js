import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import FooterSmall from './FooterSmall.js';
import IntroductionFragment from './IntroductionFragment.js';
import WorkflowFragment from './WorkflowFragment.js';
import AnnouncementFragment from './AnnouncementFragment.js';

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
          <AnnouncementFragment icon="icon-warning" text="The application is in alpha and running on the Ethereum testnet (Rinkeby)." linkText="View changelog ›" linkAddress="/changelog" />
          <IntroductionFragment/>
          <WorkflowFragment/>
        </div>
        <FooterSmall/>
      </div>
    );
  }
}

export default Home
