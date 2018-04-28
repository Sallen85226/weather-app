import React, { Component } from 'react';
import Weather from './Weather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid App-header">
          <h1>DevWeather</h1>
        </div>
        <div className="container">
          <Weather/>
        </div>
      </div>
    );
  }
}

export default App;
