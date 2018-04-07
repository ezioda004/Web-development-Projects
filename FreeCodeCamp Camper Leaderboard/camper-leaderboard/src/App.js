import React, { Component } from 'react';
import './App.css';
import {Header} from './Header.js';
import {Footer} from './Footer.js';
import {Camper} from './Camper.js';
import Leaderboard from './Leaderboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Leaderboard/>
        <Camper />
        <Footer />
      </div>
    );
  }
}

export default App;
