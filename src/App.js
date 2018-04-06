import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Wizard from './pages/Wizard.js';
import Features from './pages/Features.js';
import NotFound from './pages/NotFound.js';
import TestNet from './pages/TestNet.js';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/features' component={Features} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/testnet' component={TestNet} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

export default App
