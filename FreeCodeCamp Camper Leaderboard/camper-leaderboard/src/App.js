import React, { Component } from 'react';
import './App.css';
import {Header} from './Header.js';
import Footer from './Footer.js';
import Leaderboard from './Leaderboard.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      camper: [],
      camperAllTime: [],
      sendRecentCamper: true
    };
    this.hanndleClick = this.hanndleClick.bind(this);
  }

  hanndleClick(){
    this.setState({sendRecentCamper: !this.state.sendRecentCamper});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Leaderboard 
          camper = {this.state.sendRecentCamper ? this.state.camper : this.state.camperAllTime}
          toggleCookies = {this.hanndleClick} />
        
        <Footer />
      </div>
    );
  }
  componentDidMount(){
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => response.json())
      .then(json =>
        this.setState({camper: json})
      );
      
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(json =>
        this.setState({camperAllTime: json})
      )
   
  }
}

export default App;
