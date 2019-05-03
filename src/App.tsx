import React, { Component } from 'react';
import './App.css';
import axios from "axios";
// import * as cors from "cors";

const heliumApi = 'https://heliumint.azurewebsites.net/api/';
const cors = 'https://cors-anywhere.herokuapp.com/';

const dogs = [
  {id: 1, breed: 'beagle', name: 'snoopy'},
  {id: 2, breed: 'dalmation', name: 'QT'},
  {id: 3, breed: 'palmaranian', name: 'puppy'},
];

class App extends React.Component {

  state = {
    names: null,
  };
  
  // invoked immediately after component is mounted 
  // good place to load data from a remote endpoint
  componentDidMount() {  
    const names = dogs.map(p => p.name);
    console.log(names);

      // axios
      // .get(cors + heliumApi + 'genres')
      // .then(response => {
      //   this.setState({
      //     isLoading:false,
      //     genre: response.data[0].id,
      //     data: null,
      //   })
      // })
      // .catch(error => {
      //   console.log(error);
      // });   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Welcome to the Helium UI Application</h1>
        <h4>View data</h4>
          <ul>
            {dogs.map(p => <p key={p.id}>{p.name}</p>)}
          </ul>
          <table>
            <tbody>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
