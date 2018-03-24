import React from 'react';

class Markdown extends React.Component {
    render(){
        return (
            <textarea onChange = {this.props.triggerHandleChange}>
                {this.props.initialValue}
            </textarea>
        );
    }
}

export default Markdown;