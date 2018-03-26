import React from 'react';
import './Markdown.css'

class Markdown extends React.Component {
    render(){
        return (
            <textarea id = "editor" onChange = {this.props.triggerHandleChange}>
                {this.props.initialValue}
            </textarea>
        );
    }
}

export default Markdown;