var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a testing application build on React. 
      </p>
      <p>
        Here are some of the references:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="https://github.com/LucMerceron/React-Redux-D3">React-Rdux-D3</a> - This is the D3 charts example to be ported in
        <li>
      </ul>
      <p>
        The main dashboard will include the following components:
      </p>
      <ul>
        <li>
          Will check for authenication.. if not logged on or timeout session, will go into login page.
        </li>
        <li>
          Alert Zone - Using the timer as a references, will adjust the radius to be smaller to indicate different alerts levels
        </li>
        <li>
          Case Management - 
        </li>
        <li>
           Charts with addon tabs or Interactive Table
        </li>
      </ul>
    </div>
  )
};

module.exports = About;