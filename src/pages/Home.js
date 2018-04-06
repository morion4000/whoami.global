import React, { Component } from 'react';

import Menu from '../containers/Menu.js';
import Header from '../containers/Header.js';
import FooterSmall from '../containers/FooterSmall.js';
import IntroductionFragment from '../containers/IntroductionFragment.js';
import WorkflowFragment from '../containers/WorkflowFragment.js';
import AnnouncementFragment from '../containers/AnnouncementFragment.js';

import '../css/Home.css';


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
          <AnnouncementFragment icon="icon-info" text="The application is in alpha and running on the Ethereum testnet (Rinkeby)." linkText="View changelog ›" linkAddress="/changelog" />
          <IntroductionFragment/>
          <WorkflowFragment/>
        </div>
        <FooterSmall/>
      </div>
    );
  }
}

export default Home;
