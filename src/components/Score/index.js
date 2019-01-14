import React from "react";
// import "./style.css";

const Score = (props) => {
    return (
        <div>
          <p className="score">Current Score: {props.score}</p>
        </div>
    );
};

export default Score;