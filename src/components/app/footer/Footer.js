import React, { Component } from 'react';
import '../app.css';
import ScrollableAnchor from 'react-scrollable-anchor';


export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer"> 
          
          <ScrollableAnchor id={'contact'}>
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
          </ScrollableAnchor>
          
        </section>
      </footer>
    );
  }
}