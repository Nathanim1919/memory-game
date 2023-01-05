import React from "react";

const GameOver = ({bestScore,score,level,restartGame}) =>{

    return(
        <div className="gameOver">
            <h1>Game Over</h1>
            <div className="gameOverContent">
                <h2>Current Score: {score}</h2>
                <h2>Best Score: {bestScore}</h2>
                <h2>Level: {level}</h2>
            </div>
            <button className="restart-btn" onClick={restartGame}>restart</button>
        </div>
    )
}

export default GameOver;