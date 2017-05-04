var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory, hashHistory} = require('react-router');
var Homepage = require('Homepage');
var Timer = require('Timer');
var Countdown = require('Countdown');
var About = require('About');
var {Provider} = require('react-redux');
var {createStore, combineReducers, applyMiddleware} = require('redux');
var thunk = require('redux-thunk').default;
import { homeReducer } from './reducers/reducers';

// Import the components used as pages
import HomePage from './components/pages/HomePage.react';
import LoginPage from './components/pages/LoginPage.react';
import RegisterPage from './components/pages/RegisterPage.react';
import Dashboard from './components/pages/Dashboard.react';
import NotFound from './components/pages/NotFound.react';
import App from './components/App.react';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(homeReducer);


function checkAuth(nextState, replaceState) {
  let { loggedIn } = store.getState();

  // check if the path isn't dashboard
  // that way we can apply specific logic
  // to display/render the path we want to
  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(null, nextState.location.pathname);
      } else {
        replaceState(null, '/');
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(null, nextState.location.pathname);
      } else {
        replaceState(null, '/');
      }
    }
  }
}

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route onEnter={checkAuth}>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="timer" component={Timer}/>
          <Route path="countdown" component={Countdown}/>
          <Route path="about" component={About}/>
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


/*
ReactDOM.render(

   <Router history={browserHistory}>
    	<Route path="/" component={Main}>
          <Route path="timer" component={Timer}/>
      		<Route path="countdown" component={Countdown}/>
      		<Route path="about" component={About}/>
      		<IndexRoute component={Homepage}/>
    	</Route>
  	</Router>,

  document.getElementById('root')
);
*/


function tick() {
  const element = (
    <div className="footer">
      <h3 className="text-center">Copyrighted@2017 ....</h3>
      <p className="text-center">Time now is {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('footer')
  );
}

setInterval(tick, 1000);


