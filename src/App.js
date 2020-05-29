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

  switchNameHandler = (newName) => {
    // Should not change state directly like this, React can't recgonised it.
    // DON'T DO THIS: this.state.persons[0].name = 'Daisy';

    this.setState({
      persons: [
        { name: newName, age: 16 },
        { name: "Bob", age: 20 },
        { name: "Calvin", age: 9 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Amy", age: 16 },
        { name: event.target.value, age: 20 },
        { name: "Calvin", age: 9 }
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>hello</h1>
        <p> this is working</p> 
        <button 
        style={style}
        onClick={() => this.switchNameHandler("daisyyy")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dave")}
          changed={this.nameChangedHandler}> Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>

      // This doesn't work because can only render one root component so it has to be inside 'div'
      // <p> this is working</p> 
    );

    // This works but not recommended when there are many nested components.
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi!!!!'));
  }
}

export default App;
