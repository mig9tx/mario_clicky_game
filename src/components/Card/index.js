import React from 'react';


const Card = (props) => {
    return (
        <div className="card">
          <img 
          src={props.src}
          id={props.id}
          alt={props.id}
          clicked={props.clicked}
          width="100px"
          onClick={() => props.handleClick(props.id)}
          />
        </div>
    );
};

export default Card;