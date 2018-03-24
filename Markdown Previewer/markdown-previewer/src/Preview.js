import React from 'react';
import marked from 'marked';

class Preview extends React.Component{
    createMarkup() {
        return {__html: marked(this.props.toPreview)};
      }
    render(){
        return (
            <div dangerouslySetInnerHTML={this.createMarkup()}>
            </div>
        )
    }
}

export default Preview;

