import React from 'react';
import './Card.css'


const Card = (props) => {
    return (
        <div className="card">
          <img 
          src={props.src}
          id={props.id}
          alt={props.id}
          clicked={props.clicked}
          
          height="150px"
          onClick={() => props.handleCardClick(props.id)}
          />
        </div>
    );
};

export default Card;