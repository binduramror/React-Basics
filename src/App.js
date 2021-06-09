//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Max", age: 30 }
    ],
    otherState: 'some other value'
  } 

  switchNameHandler = () => {
    console.log("clicked");
    // this.state.persons[0].name = "bindu";
    this.setState( {
      persons : [
      { name: "Ram", age: 28 },
      { name: "Bhashwith", age: 29 },
      { name: "Rushi", age: 30 }
    ]
  }
      )
  }

  render() {
      return (
    <div className="App">
      <h1> Hi I am React Coomponent </h1>
      <p> this is really working </p>
      <button onClick={() => switchNameHandler('ram')}> Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
     <Person 
       name={personsState.persons[1].name} 
       age={personsState.persons[1].age} 
       click={switchNameHandler.bind(this, 'new Rushi')}
       changed={nameChangeHandler} >My hobbies :Racing </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>

  );
  }

}

export default App;
