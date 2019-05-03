import React, { Component } from 'react';
import './App.css';
import axios from "axios";

const heliumApi = 'https://heliumint.azurewebsites.net/api/';
const cors = 'https://cors-anywhere.herokuapp.com/';

class App extends React.Component {

  state = {
    genres: [{id: null, name: null}],
  };
  
  //testing github
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
