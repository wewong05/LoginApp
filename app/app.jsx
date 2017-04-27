var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
var About = require('About');
var {Provider} = require('react-redux');
var {createStore, applyMiddleware} = require('redux');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('app2')
  );
}

setInterval(tick, 1000);


