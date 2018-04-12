import React, {Component} from 'react';
import Camper from './Camper.js';
import './Leaderboard.css';

//Leaderboard Component which renders the Leaderboard button switch here
class Leaderboard extends Component {

    //making a map of Camper comp and rendering
    render(){
        const camperTop100 = this.props.camper.map( 
            (val, i) => <Camper 
                camper = {val}
                key = {i}
                rank = {i+1}/>)
        return (
            <div id = "Leaderboard"> 
                <div id = "Leaderboard-header"> 
                    <h3><i className="fas fa-trophy"></i> Leaderboard</h3>
                    <div>
                        <button className = "btn btn-sm" onClick = {this.props.toggleCookies}>
                            {this.props.recentCamper?"Top 100":"Recent"}    
                        </button>
                    </div>
                   
                </div>
                
                <div id = "title" className = "text-center">
                    <div>#</div>
                    <div>Camper</div>
                    <div>3🍪 days</div>
                    <div>🍪 All time</div>
                </div>
                {camperTop100}
            </div>
           
        )
    }
}

export default Leaderboard;
