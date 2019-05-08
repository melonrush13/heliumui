import React, { Component } from 'react';
import './App.css';
import axios from "axios";

const heliumApi = 'https://heliumint.azurewebsites.net/api/';
const cors = 'https://cors-anywhere.herokuapp.com/';

class App extends React.Component {

  state = {
    genres: [{id: null, name: null}],
    movies: [{id: null, title: null}],
    actors: [{id: null, name: null}],
    genresDisplay: false,
    moviesDisplay: false,
    actorsDisplay: false,

  };


  onGenresClick = (event: any) => {
    console.log("genres display!");
    this.setState({genresDisplay: !this.state.genresDisplay})
  }

  onMoviesClick = (event: any) => {
    console.log("movies display!");
    this.setState({moviesDisplay: !this.state.moviesDisplay})
  }

  onActorsClick = (event: any) => {
    console.log("actors display!");
    this.setState({actorsDisplay: !this.state.actorsDisplay})
  }
  
  //testing github
  componentDidMount() {  
      axios.get(cors + heliumApi + 'genres').then(response => {
        const genreData = response.data.map((item: any) => ({
          id: item.id,
          name: item.genre
        }))
        this.setState({
          genres: genreData
        })
      })
      axios.get(cors + heliumApi + 'movies').then(response => {
        const moviesData = response.data.map((item: any) => ({
          id: item.id,
          title: item.title
        }))
        this.setState({
          movies: moviesData
        })
      })
      axios.get(cors + heliumApi + 'actors').then(response => {
        const actorsData = response.data.map((item: any) => ({
          id: item.id,
          name: item.name
        }))
        this.setState({
          actors: actorsData
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
        <ul>
          <button onClick={this.onMoviesClick}>Movies</button>
          <button onClick={this.onGenresClick}>Genres</button>
          <button onClick={this.onActorsClick}>Actors</button>
        </ul>
        <ul>
        {this.state.genresDisplay && this.state.genres.map(item => (
              <ul>{item.id}</ul>
            ))}
        </ul>
        <ul>
        {this.state.moviesDisplay && this.state.movies.map(item => (
              <ul>{item.title}</ul>
          ))}
        </ul>
        <ul>
        {this.state.actorsDisplay && this.state.actors.map(item => (
              <ul>{item.name}</ul>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
