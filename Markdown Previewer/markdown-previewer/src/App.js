import React, { Component } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ` # Hello World (H1)
      \n ## This is my Markdown Previewer (H2) 
      \n ### This markdown uses github style. (H3)
      \n Paragraphs are sperated by lines 
      \n #### Unordered list: \n * use asterisks \n - or minuses \n + or pluses \n
      \n #### Numbered list: \n 1. apples \n 2. oranges \n 3. pears \n
      \n Text attributes _italic_, *italic*, __bold__, **bold**, \`monospace\`, ~~strikethrough~~.
      \n \`<This is inline code>\`
      \n \`\`\` 
      function multiLineCode(){
        return "This works!";
      }
      \n \`\`\`  `
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
      <div id = "container">
        <header>
          <h1 className = "text-center"> Markdown Previewer</h1>
        </header>
        
        <div className = "main"> 
          <Markdown 
            triggerHandleChange = {this.onHandleChange}
            initialValue = {this.state.input} />
          {console.log(this.state.input)}
          <Preview toPreview = {this.state.input} />
        </div>

        <footer>
          <div id = "author">
            Made by ezioda004
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
