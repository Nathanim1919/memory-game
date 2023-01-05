import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import GameOver from "./components/gameOver";
import Card from "./components/card";
import m1 from "./images/m1.jfif";
import m2 from "./images/m2.jfif";
import m3 from "./images/m3.jfif";
import m5 from "./images/m5.jpg";
import m6 from "./images/m6.png";
import m7 from "./images/m7.png";
import m8 from "./images/m8.png";
import m9 from "./images/m9.png";
import m10 from "./images/m10.png";
import m12 from "./images/m12.png";


const App = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [bestScore, setBestScore] = useState(0);
  const [seen,setSeen] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const [cards, setCards] = useState([
    {
      pic: m1,
      name: "Panda",
      id:'m1'
    },

    {
      pic: m2,
      name: "Litle man",
      id:'m2'
    },

    {
      pic: m3,
      name: "Elephant",
      id:'m3'
    },

    {
      pic: m5,
      name: "super-hero",
      id:'m4'
    },

    {
      pic: m6,
      name: "Frog",
      id:'m5'
    },

    {
      pic: m7,
      name: "Beautiful Cat",
      id:'m6'
    },

    {
      pic: m8,
      name: "Litle Man",
      id:'m7'
    },
    {
      pic: m9,
      name: "super man",
      id:'m8'
    },

    {
      pic: m10,
      name: "Star man",
      id:'m9'
    },

    {
      pic: m12,
      name: "wanted man",
      id:'m10'
    },
  ]);

  const [moves, setMoves] = useState(0);

  useEffect(() => {
      const render = () => {
        setCards(
          cards.sort((a, b) => 0.5 - Math.random())
        );
      };

      render();
    
  }, [moves]);


  const handleClick = (i) => {
        setMoves(moves + 1);
        if(seen == []){
          setSeen([i]);
        }
        if(!seen.includes(i.toString())){
            setSeen([...seen,i]);
            setScore(score + 1);
            console.log(seen);
        }
        else{
            if(score > bestScore){
                setBestScore(score);
            }
           
            setIsGameOver(true);
        }
        
        
  };


  const restartGame = () =>{
    setIsGameOver(false)
    setScore(0);
    setMoves(0);
    setSeen([]);
  }


  if(isGameOver){
    return (
      <GameOver
        score={score}
        level={level}
        bestScore={bestScore}
        moves={moves}
        seen={seen}
        restartGame = {restartGame}
      />
    )
  }
else{
  return (
    <>
      <Header score={score} level={level} bestScore={bestScore} moves = {moves}/>
      <div className="cardList">
        {cards.map((card, i) => (
         <Card
          key = {card.id}
          src={card.pic}
          name={card.name}
          handleClick={() => handleClick(card.id)}
       />
        ))};
      </div>
    </>
  );
}
};


export default App;