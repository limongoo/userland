import React, { Component } from 'react';
import '../app.css';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer maxwidth-wrap"> 
          <p>&#169; <a href="https://github.com/limongoo/" target="_blank" rel="author noopener noreferrer">UserLAnd Technologies, LLC.</a></p>
        </section>
      </footer>
    );
  }
}