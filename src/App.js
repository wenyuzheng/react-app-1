import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>hello</h1>
        <p> this is working</p> 
      </div>

      // This doesn't work because can only render one root component so it has to be inside 'div'
      //<p> this is working</p> 
    );

    // This works but not recommended when there are many nested components.
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi!!!!'));
  }
}

export default App;
