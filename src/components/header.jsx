import React from "react";


const Header = (props) =>{
    return(
        <div className="header">
            <h1 className="title">Memory Game</h1>
            <div className="score">
                <h3>Moves: <span>{props.moves}</span></h3>
                <h3>Score: <span>{props.score}</span></h3>
                <h3>Best-score: <span>{props.bestScore}</span></h3>
                <h3>Level: <span>{props.level}</span></h3>
            </div>
        </div>
    );
}


export default Header;