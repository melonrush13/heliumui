import React, { Component } from 'react';
import './App.css';
import axios from "axios";
// import * as cors from "cors";

const heliumApi = 'https://heliumint.azurewebsites.net/api/';
const cors = 'https://cors-anywhere.herokuapp.com/';

class App extends React.Component {

  state = {
    genreItems: [],
    isLoading: true,
    genre: null,
    data: null,
  };
  
  // invoked immediately after component is mounted 
  // good place to load data from a remote endpoint
  componentDidMount() {
    console.log("Start of Mount");
  
      axios
      .get(cors + heliumApi + 'genres')
      .then(response => {

        this.setState({
          isLoading:false,
          genre: response.data[0].id,
          data: null,
        })

        const data = response.data.genre;
        this.setState({data});

        // const newGenres = response.data.map((c:any) => {
        //   console.log('hi ' + response.data[c].id);
        //   return {
        //     id: c.id,
        //     name: c.name,
        //   };
        // });

        // const newState = Object.assign({}, this.state, {
        //   genreItems: newGenres
        // });

        // this.setState(newState)

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
          <p>genres: {this.state.genre}</p>
          <p>genres: {this.state.data}</p>
          <table>
            <tbody>
              {this.state.genreItems.map((genre) => {return <tr>
                <td>genre.id</td>
                <td>genre.genre</td>
              </tr>})}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
