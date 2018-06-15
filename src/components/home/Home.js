import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Landing from './userland-landing.jpg';


class Home extends Component {

  render() { 
    return (
      <section className="main-container maxwidth-wrap">

        {/* --- Landing Section --- */}
        <div className="landing-container">
          <h1 className="landing-title">Welcome to UserLAnd Technologies</h1>
          <img className="landing-img" src={Landing} alt="Userland landing"/>
        </div>



        {/* --- About Us Section --- */}
        <div className="about-container">
          
          {/* Title goes here */}
          <h3 className="about-title"> About UserLAnd Technologies</h3>
          
          {/* Text goes here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>



        {/* --- Product Section --- */}
        <div className="product-container">
          
          {/* Title goes here */}
          <h3 className="product-title">Product</h3>
          
          {/* Text goes here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>


        {/* --- Job Posting Section --- */}
        <div className="job-container">
          
          {/* Title goes here */}
          <h3 className="job-title">Jobs</h3>
          
          {/* Text goes here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>


        {/* --- Contact Section --- */}
        <div className="contact-container">
          
          {/* Title goes here */}
          <h3 className="contact-title">Contact</h3>
          
          {/* Text goes here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);