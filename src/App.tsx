import React, { Component } from 'react';
import './App.css';
import axios from "axios";
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
        <header className="App-header">
        <h1>Welcome to the Helium UI Application</h1>
        <h4>View data</h4>
        </header>
        <table>
            {this.state.genres.map(item => (
              <th>{item.id}</th>
            ))}
        </table>
      </div>
    );
  }
}

export default App;
