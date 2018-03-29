import React from 'react';
import marked from 'marked';
import './Preview.css';
import './Markdown.css';

const renderer = new marked.Renderer();
renderer.link = ( href, title, text ) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;



//Preview Child Component that...previews 

class Preview extends React.Component{
    createMarkup() {
        return {__html: marked(this.props.toPreview, {renderer})};
      }
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
                        <span><i className="fas fa-eye"></i> Preview</span>
                    </div>
                </div>
                <div id = "preview" dangerouslySetInnerHTML={this.createMarkup()}>
                </div>
            </div>
            
        )
    }
}


export default Preview;

