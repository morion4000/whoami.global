import React, { Component } from 'react';

class IntroductionFragment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row justify-content-center text-center section-intro">
            <div className="col-12 col-md-9 col-lg-8">
              <span className="title-decorative">Verify once, use everywhere</span>
              <h2 className="display-4">Airdrops, Whitelists, and ICOs</h2>
              <span className="lead">Use your identity to gain access to a multitude of services</span>
            </div>
          </div>
          {/*
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-10">
              <div className="video-cover rounded">
                <img alt="Image" src="assets/img/photo-woman-kitchen.jpg" className="bg-image" />
                <div className="video-play-icon">
                  <i className="icon-controller-play" />
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" data-src="https://www.youtube.com/embed/oYqvpjKJZkU?autoplay=1&mute=1&showinfo=0&rel=0" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
          */}
          <div className="row justify-content-center text-center section-outro">
            <div className="col-lg-4 col-md-5">
              <h6>Verify identity only once,</h6>
              <p>Pay to have your idenity verified, get payed when its used.</p>
              <a href="#">View use cases ›</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroductionFragment
