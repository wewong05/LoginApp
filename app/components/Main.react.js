var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className="column large-centered medium-12 large-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
