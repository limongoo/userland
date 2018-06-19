import React, { Component } from 'react';
import '../app.css';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer"> 
          
          {/* --- Contact Section --- */}
          <div className="contact-container">
            <div className="maxwidth-wrap container">
              {/* Title goes here */}
              <h4 className="contact-title">Contact</h4>
          
              {/* Text goes here */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>&#169; UserLAnd Technologies, LLC.</p>
              
            </div>
            {/* <div className="layer-footer"></div> */}
          </div>
          
        </section>
      </footer>
    );
  }
}