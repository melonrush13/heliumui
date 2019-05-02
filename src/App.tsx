import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import * as cors from "cors";

const heliumApi = 'https://heliumint.azurewebsites.net/api/genres';

class App extends React.Component {

  state = {
    items: [],
    isLoaded: false,
  };
  
  // invoked immediately after component is mounted 
  // good place to load data from a remote endpoint
  componentDidMount() {
    console.log("Start of Mount");

    axios
      .get('https://cors-anywhere.herokuapp.com/' + heliumApi)
      .then(response => {
        console.log('arrived');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi! 
          </p>
          <table>
            <tbody>
              <tr>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
