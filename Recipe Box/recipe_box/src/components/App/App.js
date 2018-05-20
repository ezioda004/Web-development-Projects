import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Box from '../Box/Box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Box />
        <Footer />
      </div>
    );
  }
}

export default App;
