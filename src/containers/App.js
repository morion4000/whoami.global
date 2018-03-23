import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './Home.js';
import About from './About.js';
import NotFound from './NotFound.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

export default App
