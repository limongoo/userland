import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import ProductImg from './product-sample.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

configureAnchors({  offset: -60, scrollDuration: 500  });

class Home extends Component {

  
  render() { 
    return (
      <section className="main-container">
        

        {/* --- Landing Section --- */}
        <div className="landing-container">
          <div className="maxwidth-wrap">
            <div className="layer">
              <h1 className="landing-title">The Possibilities Are Endless</h1>
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



        {/* --- Product Section --- */}
        <ScrollableAnchor id={'product'}>
          <div className="product-container">
            <div className="maxwidth-wrap">
            
              <div className="product-wrap">
                {/* Title goes here */}
                <h4 className="product-title">Power for what you do today. 
                <br/>And what you’ll discover tomorrow.</h4>
                <div className="title-block-product"></div>

                {/* Text goes here */}
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <ScrollAnimation animateIn='fadeIn'>
                <div className="product-flex">
                  <img className="product-img" src={ProductImg} alt="SampleImage"/>
                  <div className="product-description">
                    <h4>Technology As It Should Be</h4>
                    <p>Minimal design and a light color-scheme were strategic choices, and the browsing experience is based around visuals that stand out more powerfully because of these decisions, allowing users to view titles, media, news, and fun facts. The internet is a vast and ever-expanding source of information. But as it continues to grow, it will be ever more important to have trustworthy authorship</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className="product-flex">
                  <img className="product-img" src={ProductImg} alt="SampleImage"/>
                  <div className="product-description">
                    <h4>Secure Access Wherever You Are</h4>
                    <p>Minimal design and a light color-scheme were strategic choices, and the browsing experience is based around visuals that stand out more powerfully because of these decisions, allowing users to view titles, media, news, and fun facts.</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className="product-flex">
                  <img className="product-img" src={ProductImg} alt="SampleImage"/>
                  <div className="product-description">
                    <h4>Introducing the Worlds Most Secure Access</h4>
                    <p>Minimal design and a light color-scheme were strategic choices, and the browsing experience is based around visuals that stand out more powerfully because of these decisions, allowing users to view titles, media, news, and fun facts.</p>
                    <p>The internet is a vast and ever-expanding source of information. But as it continues to grow, it will be ever more important to have trustworthy authorship.</p>
                  </div>
                </div>
              </ScrollAnimation>

         
            </div>
          </div>
        </ScrollableAnchor>


        {/* --- Job Posting Section --- */}
        <ScrollableAnchor id={'jobs'}>
          <div className="job-container">
            <div className="maxwidth-wrap">
          
              {/* Title goes here */}
              <h5 className="about-title"> Jobs at UserLAnd</h5>
              <div className="title-block"></div>
          
              {/* Text goes here */}
              <div className="job-section">
                <ul className="jobs-ul">
                
                  <ScrollAnimation animateIn='fadeIn'>
                    <li className="jobs-li">
                      <div className="jobs-title">
                        <h4>Back-End Developer</h4>
                        <p>Application Deadline: 6/30/2018</p>
                    
                      </div>
                      <div className="jobs-description">
                        <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                        <ul className="jobs-sub-ul">
                          <li>You are smart and keep your head up in the face of a challenge.</li>
                          <li>You are a quick study and enjoy learning new things.</li>
                          <li>You have a demonstrated aptitude for software development.</li>
                          <li>You are not afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.</li>
                          <li>You diagnose and squash technical debt with glee.</li>
                          <li>You like helping others, regardless of their technical prowess.</li>
                        </ul>
                        <p>To apply, email your resume and cover letter to <strong><a href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
                      </div>
                    </li>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn='fadeIn'>
                    <li className="jobs-li">
                      <div className="jobs-title">
                        <h4>Back-End Developer</h4>
                        <p>Application Deadline: 6/30/2018</p>

                      </div>
                      <div className="jobs-description">
                        <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                        <ul className="jobs-sub-ul">
                          <li>You are smart and keep your head up in the face of a challenge.</li>
                          <li>You are a quick study and enjoy learning new things.</li>
                          <li>You have a demonstrated aptitude for software development.</li>
                          <li>You are not afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.</li>
                          <li>You diagnose and squash technical debt with glee.</li>
                          <li>You like helping others, regardless of their technical prowess.</li>
                        </ul>
                        <p>To apply, email your resume and cover letter to <strong><a href="mailto:jobs@userlandtech.com">jobs@userlandtech.com</a></strong></p>
                      </div>
                    </li>
                  </ScrollAnimation>
                
                </ul>
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
)(Home);