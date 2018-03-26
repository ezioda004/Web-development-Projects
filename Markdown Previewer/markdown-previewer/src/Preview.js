import React from 'react';
import marked from 'marked';
import './Preview.css';

class Preview extends React.Component{
    createMarkup() {
        return {__html: marked(this.props.toPreview)};
      }
    render(){
        return (
            <div id = "preview" dangerouslySetInnerHTML={this.createMarkup()}>
            </div>
        )
    }
}

export default Preview;

