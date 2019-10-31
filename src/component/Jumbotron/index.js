import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h1>Clicky Game</h1>
      <a href="https://en.wikipedia.org/wiki/One_Piece">
        Wiki: One piece
      </a>
      <h3>Best Score: {props.bestScore}</h3>
      <p>Score: {props.score}</p>


      
    </div>
  );
}

export default Jumbotron;
