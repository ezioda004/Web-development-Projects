import React, { Component } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: 'Hello World'
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Markdown 
          triggerHandleChange = {this.onHandleChange}
          initialValue = {this.state.input} />
        {console.log(this.state.input)}
        <Preview toPreview = {this.state.input} />
      </div>
    );
  }
}

export default App;
