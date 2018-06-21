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
              <div className="contact-flex">
                <p></p>
                <p>&#169; UserLAnd Technologies, LLC.</p>
              </div>
            </div>
            {/* <div className="layer-footer"></div> */}
          </div>
          
        </section>
      </footer>
    );
  }
}