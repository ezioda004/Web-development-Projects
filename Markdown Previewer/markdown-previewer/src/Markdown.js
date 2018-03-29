import React from 'react';
import './Markdown.css'
import 'bootstrap/dist/css/bootstrap.css';

class Markdown extends React.Component {
    render(){
        return (
            <div className = "terminal">
                <div className = "nav">
                    <div className = "icons">
                        <span className = "mac mac-red"> </span>
                        <span className = "mac mac-orange"> </span>
                        <span className = "mac mac-green"> </span>
                    </div>
                    <div className = "title">
                        <span><i className="fas fa-code"></i> Editor</span>
                    </div>
                    
                </div>
                <textarea id = "editor" 
                    onChange = {this.props.triggerHandleChange}
                    defaultValue = {this.props.initialValue}>
                
                </textarea>
            </div>
            
        );
    }
}

export default Markdown;