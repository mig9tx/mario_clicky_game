import React from "react";
import './HighScore.css';

// by extending the React.component class, Counter inherits functionality form it

const HighScore = (props) => {
    return (
        <div className="card-body">
            <p className="highScore">High Score: {props.highScore} </p>
        </div>
    );
}

export default HighScore;