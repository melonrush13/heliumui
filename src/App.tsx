import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import * as cors from "cors";

const heliumApi = 'https://heliumint.azurewebsites.net/api/genres';

class App extends React.Component {

  state = {
    items: [],
    isLoading: true,
  };
  
  // invoked immediately after component is mounted 
  // good place to load data from a remote endpoint
  componentDidMount() {
    console.log("Start of Mount");
    console.log(this.state.isLoading);


    //function getGenres() {
      axios
      .get('https://cors-anywhere.herokuapp.com/' + heliumApi)
      .then(response => {
        console.log('arrived');

        this.setState({
          isLoading:false,
          items: response.data[1].id,
        })
        console.log(response.data[1].id);
        console.log(this.state.isLoading);



        const newContacts = response.data.map((c:any) => {
          console.log('hi ' + response.data[c].id);

          return {
            id: c.id,
            name: c.name
          };
        });





      })

      

      .catch(error => {
        console.log(error);
      });
   // }
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>genres: {this.state.items}</ul>
          <p>State: {this.state.isLoading}</p>
          <table>
            <tbody>
              {this.state.items.map((item) => {return <tr>
                <td>item.id</td>
                <td>item.genre</td>
              </tr>})}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
