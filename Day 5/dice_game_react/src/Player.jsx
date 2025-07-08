import React from "react";

const Player = ({playerid,score,current,isActive})=> {
    return(
        <div className={`player ${isActive ? 'player--active' : ''}`}>
            <h1 className="name">Player {playerid}</h1>
            <p className="score">{score}</p>
            <div className="current">
                <p className="current-txt">Current</p>
                <p className="current-score">{current}</p>
            </div>
        </div>
    )
}
export default Player