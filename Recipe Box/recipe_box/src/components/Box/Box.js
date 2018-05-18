import React, { Component } from 'react';
import './Box.css';

class Box extends Component{
    render(){
        return (
            <main id = "box"> 
                <div className = "desc">
                   <h2>this is some heading</h2>
                </div>
            </main>
        );
    }
}

export default Box;