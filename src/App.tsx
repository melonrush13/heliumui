import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { Typography, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';


const heliumApi = 'https://heliumint.azurewebsites.net/api/';
const cors = 'https://cors-anywhere.herokuapp.com/';

class App extends React.Component {

  state = {
    genres: [{id: null, name: null}],
    movies: [{id: null, title: null, year: null, genres: [], roles: [],}],
    actors: [{id: null, name: null}],
    genresDisplay: false,
    moviesDisplay: false,
    actorsDisplay: false,
    expanded: null,
  };

  handleChange = (panel: any) => (event: any, expanded: any) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  onGenresClick = (event: any) => {
    console.log("genres display!");
    this.setState({genresDisplay: !this.state.genresDisplay})
    this.setState({actorsDisplay: false}) 
    this.setState({moviesDisplay: false})
  }

  onMoviesClick = (event: any) => {
    console.log("movies display!");
    this.setState({moviesDisplay: !this.state.moviesDisplay})
    this.setState({actorsDisplay: false}) 
    this.setState({genresDisplay: false}) 

  }

  onActorsClick = (event: any) => {
    console.log("actors display!");
    this.setState({actorsDisplay: !this.state.actorsDisplay})
    this.setState({genresDisplay: false}) 
    this.setState({moviesDisplay: false})
  }
  
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
    const { expanded } = this.state;
    return (
      <div className="App">
        <div>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary>
                <Typography> Header </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>Details</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
              {this.state.movies.map(item => (
              <ExpansionPanelSummary>{item.title}</ExpansionPanelSummary> 
              ))}
        </div>
        <h3>Welcome to the Helium UI Application</h3>
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
