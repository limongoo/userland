import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Landing from './userland-landing.jpg';


class Home extends Component {

  render() { 
    return (
      <section className="main-container maxwidth-wrap">

        <div className="landing-container">
          <h1 className="landing-title">Welcome to UserLAnd Technologies</h1>
          <img className="landing-img" src={Landing} alt="Userland landing"/>
        </div>

      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);