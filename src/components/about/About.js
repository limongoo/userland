import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutImg from './about.jpg';
import { Link } from 'react-router-dom';

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
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> About UserLAnd Technologies</h5>
            <div className="title-block"></div>
          
            <div className="about-content">
              <ScrollAnimation animateIn='fadeIn'>
                <img className="about-img" src={AboutImg} alt="About UserLAnd"/>            
              </ScrollAnimation>
              
              {/* Text goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            </div>
          </div>
        </div>
     
        {/* --- What We Do section --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> What We Do</h5>
            <div className="title-block"></div>
          
            <div className="about-content">
              <ScrollAnimation animateIn='fadeIn'>
                <img className="about-img" src={AboutImg} alt="About UserLAnd"/>            
              </ScrollAnimation>
              
              {/* Text goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            </div>
          </div>
        </div>


        {/* --- Our Core Values --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> Our Core Values</h5>
            <div className="title-block"></div>
          
            <div className="core-content">
              
              {/* Text goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
              {/* Text goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              {/* Text goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            </div>
          </div>
        </div>

      
        {/* --- View our product section --- */}
        <div className="about-container">
          <div className="maxwidth-wrap">
          
            {/* Title goes here */}
            <h5 className="about-title"> View Our Product</h5>
            <div className="title-block"></div>
          
            <div className="view-content">
              
              {/* Text goes here */}
              <h4>We make simple, complex and secure systems</h4>
              <Link to="/product" href="#product" alt="Go to product page">Explore Our Products</Link>
        
            </div>
          </div>
        </div>




        
      </section>
    );
  }
}

export default connect(
  null,
  null
)(About);