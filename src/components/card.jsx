import React from 'react';

const Card = (props) =>{
    return(
        <div className ="card"  onClick={props.handleClick}>
            <img src={props.src} alt="" />
            <h3>{props.name}</h3>
        </div>
    );
}

export default Card;