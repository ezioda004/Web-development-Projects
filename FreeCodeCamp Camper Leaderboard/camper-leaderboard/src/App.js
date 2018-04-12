import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Leaderboard from './Leaderboard.js';


//Main App Component
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


  //handleclick which switches sendRecentCamper basically tells which state to pass down as camper property to leaderboard
  hanndleClick(){
    this.setState({sendRecentCamper: !this.state.sendRecentCamper});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Leaderboard 
          camper = {this.state.sendRecentCamper ? this.state.camper : this.state.camperAllTime} //this is where magic happens
          toggleCookies = {this.hanndleClick}
          recentCamper = {this.state.sendRecentCamper} />
        <Footer />
      </div>
    );
  }

  //async request here, using fetch API which uses promises and saving it to state
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
