// import React from 'react';

// export default class HelloComponent extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             name : Neil
//         };
//     }
    
//     render() {
//         return (
//           <p>Hello {this.props.name} !</p>  
//         );
//     }
// }

var React = require('react');

var HelloComponent = React.createClass({
   getDefaultProps : function(){
       return {
           name : 'Neil'
       }
   },
   
   render : function(){
    return (
        <div>
            <p>Hello {this.props.name} </p>
        </div>
    );   
   }
});

module.exports = HelloComponent;