import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Landing from './userland-landing.jpg';


class Home extends Component {

  render() { 
    return (
      <section className="main-container">
        

        {/* --- Landing Section --- */}
        <div className="landing-container">
          <div className="maxwidth-wrap">
            <div className="layer">
              <h1 className="landing-title">Endless Possibilities at UserLAnd Technologies</h1>
              <div className="landing-img"></div>
            </div>
          </div>
        </div>



        {/* --- About Us Section --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
            {/* Title goes here */}
            <h4 className="about-title"> About UserLAnd Technologies</h4>
          
            {/* Text goes here */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>



        {/* --- Product Section --- */}
        <div className="product-container">
          <div className="maxwidth-wrap">
            {/* Title goes here */}
            <h4 className="product-title">Product</h4>
          
            {/* Text goes here */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>


        {/* --- Job Posting Section --- */}
        <div className="job-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h4 className="job-title">Jobs</h4>
          
            {/* Text goes here */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>


        
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);