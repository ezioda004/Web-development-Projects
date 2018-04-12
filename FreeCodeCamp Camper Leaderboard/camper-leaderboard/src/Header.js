import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.css' 
import './Header.css';

const Header = (props) => {
    return (
        <header>
             <h2>
                 <a href = "https://www.freecodecamp.org" target = "_blank">freeCodeCamp 
                    <i className="fab fa-free-code-camp"></i>
                </a>
            </h2>
        </header>
       
    );
}

export default Header;

