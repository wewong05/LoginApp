/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.react';
import { connect } from 'react-redux';

export class HomePage extends Component {
	render() {
    //const dispatch = this.props.dispatch;
    //const { loggedIn } = this.props.data;

	//const loggedIn = false;
	//const dispatch = false;
     const dispatch = this.props.dispatch;
    const { loggedIn } = this.props.data;

    return (

    	<article>
			<div>
				<section className="text-section">
					{/* Change the copy based on the authentication status */}
						{loggedIn ? (
							<h1>Welcome, you are logged in!</h1>
							) : (
							<h1>HomePage - Please login to continue!</h1>
						)}
						<p>The login page is referenced to mxstbr github as a starting point for login page. See the full source code on <a href="https://github.com/mxstbr/login-flow">Github</a>!</p>
						<p>The default username is <code>AzureDiamond</code> and the default password is <code>hunter2</code></p>
						{loggedIn ? (
							<Link to="/dashboard" className="btn btn--dash">Dashboard</Link>
						) : (
						
							<div className="row">
          						<div className="columns small-centered small-10 medium-6 large-4">
            						<div className="callout callout-auth">
              							<h3>Login</h3>
              							<p>
                							Login with your account below.
              							</p>
              							<Link to="/login" className="button">Login</Link>
            						</div>
          						</div>
        					</div>
						)}
				</section>

				<section className="text-section">
					<h2>Features Used in the react template</h2>
					<ul>
						<li>
							<p><a href="https://github.com/gaearon/redux"><strong>Redux</strong></a> is a much better implementation of a flux–like, unidirectional data flow. Redux makes actions composable, reduces the boilerplate code and makes hot–reloading possible in the first place. For a good overview of redux check out the talk linked above or the <a href="https://gaearon.github.io/redux/">official documentation</a>!</p>
						</li>
						<li>
							<p><a href="http://foundation.zurb.com/sites/docs/"><strong>Foundation</strong></a> is used </p>
						</li>
						<li>
							<p><a href="https://github.com/rackt/react-router"><strong>react-router</strong></a> is used for routing in this boilerplate. react-router makes routing really easy to do and takes care of a lot of the work.</p>
						</li>
						<li>
							<p><a href="https://github.com/reactjs/react-redux"><strong>React-Redux</strong></a> is used</p>
						</li>
					</ul>
				</section>
			</div>
		</article>
	);
  }
};

//module.exports = HomePage;

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);