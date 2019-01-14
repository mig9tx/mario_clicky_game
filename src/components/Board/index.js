import React from 'react';
import cards from '../../cards.json';
import Card from '../Card/index.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }
    state = {
        cards
    }
    handleCardClick(event) {

        console.log('thisCardClicked');
      }    
    
    render() {
        console.log(this.state);
        return (
           <div>
           {this.state.cards.map(card => (
               <Card
                 id={card.id}
                 key={card.name}
                 src={card.image}
                 clicked={card.clicked}
                 handleCardClick={this.handleCardClick}    
               />
           ))}
           </div> 

        )
    }
}