import React, { Component } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ` # Hello World;
      \n ## This is my Markdown Previewer.
      \n ### This markdown uses github style.
      \n Paragraphs are seperated by lines. 
      \n #### Unordered list: \n * Use asterisks \n - Or minuses \n + Or pluses \n
      \n #### Numbered list: \n 1. WoW \n 2. OW \n 3. HS \n
      \n Text attributes _italic_, *italic*, __bold__, **bold**, \`monospace\`, ~~strikethrough~~, ***itaclic and bold***
      \n \`<This is inline code>\`
      \n \`\`\` 
      function multiLineCode(){
        return "This works!";
      }
      multiLineCode();
      \n \`\`\`  
      \n links open in [new page](www.google.com)
      \n ![React](http://jpizz.com/assets/img/react.png)
      \n Made by [ezioda004](https://github.com/ezioda004)`
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
            
          <Preview toPreview = {this.state.input} />
        </div>

        <footer>
          <div id = "author">
            Made by <a href = "https://github.com/ezioda004" target = "_blank">ezioda004</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
