import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { generateKeyPairSync } from 'crypto';
// import * as cors from "cors";

const heliumApi = 'https://heliumint.azurewebsites.net/api/';
const cors = 'https://cors-anywhere.herokuapp.com/';

class App extends React.Component {

  state = {
    names: null,
    pups: [1, 2, 3],
    genres: [{id: null, name: null}],
  };
  
  // invoked immediately after component is mounted 
  // good place to load data from a remote endpoint
  componentDidMount() {  
      axios
      .get(cors + heliumApi + 'genres')
      .then(response => {
        const genredata = response.data.map((item: any) => ({
          id: item.id,
          name: item.genre
        }))
        this.setState({
          genres: genredata
        })
      })
      .catch(error => {
        console.log(error);
      });   
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Helium UI Application</h1>
        <h2>Genres API</h2>
        <ul>
        {this.state.genres.map(item => (
              <ul>{item.id}</ul>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
