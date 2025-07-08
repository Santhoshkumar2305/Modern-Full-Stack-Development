import React from "react";

const Controls = ({handleRoll,handleHold,handleNewGame})=>{
    return(
        <div className="controls">
            <button className="btn btn--new" onClick={handleNewGame}>🔄 New Game</button>
            <button className="btn btn--roll" onClick={handleRoll}>🎲 Roll Dice</button>
            <button className="btn btn--hold" onClick={handleHold}>📥 Hold</button>
        </div>
    )
}
export default Controls