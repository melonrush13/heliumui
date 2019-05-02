import React from "react";
import './App.css';
import axios from "axios";
 
const App: React.FC = () => {

  const api = 'https://heliumint.azurewebsites.net/api/genres';

  const state = {
    genres: [],
  };
  
  function componentDidMount() {
    console.log("Start of Mount");

    axios
      .get(api)
      .then(response => {
        console.log('arrived');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
