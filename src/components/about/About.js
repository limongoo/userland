import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';

configureAnchors({  offset: -60, scrollDuration: 500  });

class About extends Component {

  
  render() { 
    return (
      <section className="main-container">
        

        {/* --- Landing Section --- */}
        <div className="alanding-container">
          <div className="maxwidth-wrap">
            <div className="layer">
              <h3 className="landing-title">We’re a company founded on the belief that good ideas deserve to be made.</h3>
              <div className="landing-img"></div>
            </div>
          </div>
        </div>



        {/* --- About Us Section --- */}
        <ScrollableAnchor id={'about'}>
          <div className="about-container">
            <div className="maxwidth-wrap">
            
              {/* Title goes here */}
              <h5 className="about-title"> About UserLAnd Technologies</h5>
              <div className="title-block"></div>
            
              <div className="about-content">
                <ScrollAnimation animateIn='fadeIn'>
                  <h3>We’re a company founded on the belief that good ideas deserve to be made.</h3>
                </ScrollAnimation>
                
                {/* Text goes here */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
              </div>
            </div>
          </div>
        </ScrollableAnchor>



      




        
      </section>
    );
  }
}

export default connect(
  null,
  null
)(About);