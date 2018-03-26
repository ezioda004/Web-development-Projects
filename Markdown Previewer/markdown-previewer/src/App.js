import React, { Component } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: `# Hello World (H1)
      \n ## This is my Markdown Previewer (H2) 
      \n ### This markdown uses github style. (H3)
      \n Paragraphs are sperated by lines 
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
      <div>
        <h1 class = "text-center"> Markdown Previewer</h1>
        <div class = "main"> 
          <Markdown 
            triggerHandleChange = {this.onHandleChange}
            initialValue = {this.state.input} />
          {console.log(this.state.input)}
          <Preview toPreview = {this.state.input} />
        </div>
      </div>
    );
  }
}

export default App;
