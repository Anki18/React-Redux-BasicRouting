import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeComponent from '../components/home-component';
import ContactComponent from '../components/contact-component';
import NavBar from '../components/navbar';

import * as forumActions from "../actions/forum-actions";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            {/* <Route path="/" component={HomeComponent} /> */}
            <Route exact path='/home' component={HomeComponent} />
            <Route exact path='/contact' component={ContactComponent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      forum: state,
  };
}

function matchDispatchToProps(dispatch) {
  return {
      ...bindActionCreators(
      Object.assign({}, forumActions), dispatch),
      dispatch
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
