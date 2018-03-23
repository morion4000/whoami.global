import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="bg-dark navbar-dark" data-sticky="top">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img alt="Whoami" src="assets/img/logo-white.svg" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="icon-menu h4" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="index.html" className="nav-link">Overview</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                      <a className="dropdown-item" href="pages-landing.html">
                        <span className="h6 mb-0">Landing Pages</span>
                        <p className="text-small text-muted">Showcase your product in style</p>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="pages-app.html">
                        <span className="h6 mb-0">App Pages</span>
                        <p className="text-small text-muted">Build detailed, functional web apps</p>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="pages-inner.html">
                        <span className="h6 mb-0">Inner Pages</span>
                        <p className="text-small text-muted">Complete your online presence</p>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="componentsDropdown" role="button" data-toggle="dropdown">Components</a>
                    <div className="dropdown-menu" aria-labelledby="componentsDropdown">
                      <a className="dropdown-item" href="components-bootstrap.html">Bootstrap</a>
                      <a className="dropdown-item" href="components-wingman.html">Whoami</a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#">Sign up</a>
                    <span>&nbsp;or&nbsp;</span><a href="#">Sign in</a>
                  </li>
                </ul>
              </div>
              {/*end nav collapse*/}
            </nav>
          </div>
          {/*end of container*/}
        </div>
      </div>
    );
  }
}

export default Menu
