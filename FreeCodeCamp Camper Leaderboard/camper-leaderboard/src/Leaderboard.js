import React, {Component} from 'react';
import Camper from './Camper.js';

import './Leaderboard.css';
class Leaderboard extends Component {

    render(){
        const camperTop100 = this.props.camper.map( 
            (val, i) => <Camper 
                camper = {val}
                key = {i}
                rank = {i+1}/>)
        return (
            <div id = "Leaderboard"> 
                <button onClick = {this.props.toggleCookies}> TEST </button>
                <div id = "title" className = "text-center">
                    <div>#</div>
                    <div>Camper</div>
                    <div>Avatar </div>
                    <div>30 days</div>
                    <div>All time</div>
                </div>
                {camperTop100}
            </div>
           
        )
    }
}

export default Leaderboard;
