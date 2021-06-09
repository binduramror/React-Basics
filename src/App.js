//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = props =>  {

  const [personsState, setPersonsState] = useState(
    {
    persons : [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Max", age: 30 }
    ],
    otherState: 'some other value'
  } 
    );

  const switchNameHandler = (newName) => {
    console.log("clicked");
    // this.state.persons[0].name = "bindu";
    setPersonsState( {
      persons : [
      { name: "maxllll", age: 28 },
      { name: "XXXX", age: 29 },
      { name: "Rushi", age: 30 }
    ]
  }
      )
  }

  const nameChangeHandler = (event) => {
     setPersonsState( {
      persons : [
      { name: "PPPPPPPPP", age: 28 },
      { name: event.target.value, age: 29 },
      { name: "Rushi", age: 30 }
    ]
  }
  )
  }
  
  
      return (
    <div className="App">
      
      <ol>
        <li> create 2 new components </li>
        <li> UserInput should hold an input element </li>
        <li>Output multiple UserOutput components </li>
        <li>pass a username (of your choice) to UserOutput </li>
        <li>add state to App component </li>
        <li> add a method to manipulate state </li>
        <li> pass the event-handler method reference to user over </li>
        <li> ensure that the new input entered by the user </li>
        <li> add two-way-binding to your input </li>
        <li> add styling </li>
      </ol>
      <UserInput />
      <UserOutput userName="ajksdfh"/>
      <UserInput userName="ajksdfh"/>
      <UserOutput userName="ajksdfh"/>
    </div>

  );
  

}

export default App;
