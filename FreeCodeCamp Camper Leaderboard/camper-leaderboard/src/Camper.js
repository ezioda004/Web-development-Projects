import React from 'react';
import './Camper.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
// import 'bootstrap.j';

const Camper = (props) => {
    const rank = props.rank;
    const username = props.camper.username;
    const avatar = props.camper.img;
    const browniesAllTime = props.camper.alltime;
    const browniesRecent = props.camper.recent;
    return (
        <div className = "text-center camper">
            <div className = "rank">{rank}</div>
            <div className = "username">{username}</div>
            <img className = "avatar" 
                src = {avatar} 
                alt = {username} 
            />
            <div className = "browniesRecent">{browniesRecent}</div>
            <div className = "browniesAllTime">{browniesAllTime}</div>
            
        </div>
    );
}

export default Camper;
