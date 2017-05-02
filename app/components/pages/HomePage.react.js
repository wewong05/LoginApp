var React = require('react');

var Homepage = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Main Dashboard</h1>
      <p>
        This is a testing application build on React. <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
      </p>
      <p>
        The main dashboard will include the following components:
      </p>
      <ul>
        <li>
          Will check for authenication.. if not logged on or timeout session, will go into login page.
        </li>
        <li>
          Alert Zone
        </li>
        <li>
          Case Management
        </li>
        <li>
           Charts with addon tabs
        </li>
      </ul>
  		
    </div>
  )


};

module.exports = Homepage;