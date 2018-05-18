import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div id = "header">
                <nav>
                    <i className="fas fa-utensils"></i>
                    <span> Recipe Box</span>
                </nav>
            </div>
        );
    }
}

export default Header;