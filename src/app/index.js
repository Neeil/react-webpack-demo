var React = require('react');
var ReactDOM = require('react-dom');
var HelloComponent = require('./components/HelloComponent.js');

ReactDOM.render(
    <HelloComponent/>,
    document.getElementById("greeting")
);