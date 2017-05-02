var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory, hashHistory} = require('react-router');
var Main = require('Main');
var Homepage = require('Homepage');
var Timer = require('Timer');
var Countdown = require('Countdown');
var About = require('About');
var {Provider} = require('react-redux');
var {createStore, combineReducers, applyMiddleware} = require('redux');
var thunk = require('redux-thunk').default;



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

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


function tick() {
  const element = (
    <div>
     <h3 className="text-center page-title">Hello!</h3>
      <p className="text-center">Time now is {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('footer')
  );
}

setInterval(tick, 1000);


