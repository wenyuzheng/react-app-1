import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      { name: "Amy", age: 16 },
      { name: "Bob", age: 20 },
      { name:"Calvin", age: 9 }
    ],
    otherState: 'Other values'
  }

  switchNameHandler = () => {
    // Should not change state directly like this, React can't recgonised it.
    // DON'T DO THIS: this.state.persons[0].name = 'Daisy';

    this.setState({
      persons: [
        { name: "Daisy", age: 16 },
        { name: "Bob", age: 20 },
        { name: "Calvin", age: 9 }
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>hello</h1>
        <p> this is working</p> 
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

      // This doesn't work because can only render one root component so it has to be inside 'div'
      // <p> this is working</p> 
    );

    // This works but not recommended when there are many nested components.
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi!!!!'));
  }
}

export default App;
