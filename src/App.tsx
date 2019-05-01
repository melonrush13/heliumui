import React from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
 
const App: React.FC = () => {

  const state = {
    genres: []
  };
  
  function componentDidMount() {
    axios
      .get("https://heliumint.azurewebsites.net")
      .then(response => {
        // create an array of data
        const genres = response.data.map((c:any) => {
          return {
            id: c.id,
            genre: c.genre
          }
        });
        const newState = Object.assign({}, this.state, {
          genres: genres
        });

        // store the new state object in the component's state
        this.setState(newState);
        
      })
    .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi! 
        </p>
        <table>
          <tbody>
            <tr>
              <td> {this.state.genres} </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
