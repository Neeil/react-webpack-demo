var React = require('react');
var ReactDOM = require('react-dom');
var HelloComponent = require('./components/HelloComponent.js');

// render the components to web pages.
ReactDOM.render(
    <HelloComponent/>,
    document.getElementById("greeting")
);