import React, { Component } from 'react';
import '../app.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from '../header/UserLand-Logo-RGB-Hex.png';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer"> 
          
          <ScrollableAnchor id={'contact'}>
            {/* --- Contact Section --- */}
            <div className="contact-container">
              <div className="contact-layer">
                <div className="maxwidth-wrap contact-content">
                
                  <div className="contact-flex">
                    <img className="footer-logo" src={Logo} alt="Userland Logo"/>
                    <div>
                      {/* Title goes here */}
                      <h3 className="contact-title">Say Hello!</h3>
          
                      {/* Text goes here */}
                      <p><a href="mailto:hello@userlandtech.com">hello@userlandtech.com</a></p>
                      <p>22311 SW Barber Blvd
                      <br/>Portland, OR 97000</p>
                      <small>&#169; 2018. UserLAnd Technologies, LLC.</small>
                    </div>
                  </div>
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