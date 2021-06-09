//import logo from './logo.svg';
import React, { Component,useState } from 'react'; 
// import React, { useState } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state = {
    username: 'ram'
  } 

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }


  render() {
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
      <UserInput 
        changed={this.usernameChangeHandler}
        currentName={this.state.username} />
      <UserOutput userName={this.state.username} />
      <UserInput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
    </div>

  );
  }

}

export default App;
