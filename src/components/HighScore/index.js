import React from "react";

// by extending the React.component class, Counter inherits functionality form it

const HighScore = (props) => {
    return (
        <div className="card-body">
            <p className="card-text">High Score: {props.highScore} </p>
        </div>
    );
}

export default HighScore;