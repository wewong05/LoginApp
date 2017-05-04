/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
import React, { Component } from 'react';
import Nav from './Nav.react';
import { connect } from 'react-redux';
import auth from '../utils/auth';

class App extends Component {
  render() {
    return(
      <div className="row">
       
          <div className="column small-centered medium-6 large-4">
            <Nav loggedIn={this.props.data.loggedIn} history={this.props.history} location={this.props.location} dispatch={this.props.dispatch} currentlySending={this.props.data.currentlySending} />
          
          <h1>  hello  </h1>
          <h1>    </h1>
          { this.props.children }
          </div>
      </div>
    )
  }
}



// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
