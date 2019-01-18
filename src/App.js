import React from 'react';
import Title from "./components/Title";
// import Images from "./components/Images";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import './App.css';
import Score from "./components/Score";
import HighScore from './components/HighScore';
import Board from "./components/Board";
import shuffle from 'lodash/shuffle';
import Card from "./components/Card";

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards,
        title: 'Mario Memory Game',
        score: 0,
        highScore: 0 
      }
    };
    componentDidMount(){
      this.setState({ cards: shuffle(this.state.cards) });
      console.log('componentDidMount');
    }
    componentDidUpdate(){
      console.log('componentDidMount')
    }
    shuffleCards(){
      this.setState({ cards: shuffle(this.state.cards) });
    }
    handleCardClick() {
      //call back of card.id in order to check if card "clicked" is true || false.
      //if true, game ends, state reset to default
      //if false, convert "clicked" to true, increment score by 1 and highScore by one, call shuffleCards again
    }

    // GUESSED CORRECTLY
    //1. if card clicked = 'false' then change clicked property to true for that specific card and
    // shuffle the cards, increment score by one and increment high score by one if higher that prev high score
    // this is done by modifying the state of various properties.

    //2. if card clicked = 'true' then that means game is over. shuffle cards and reset score counter to 0
    // update the state to render changes.

    //3. 

    


  render() {
    return (      
      <Wrapper>
           <Title title={this.state.title}/>
           <HighScore highScore={this.state.highScore}/>
           <Score score={this.state.score}/>
           <Board>
             {
               this.state.cards.map(card => (
                 <Card
                    key={card.id}
                    id={card.id}
                    src={card.image}
                    clicked={card.clicked}
                    handleCardClick={this.handleCardClick}
                  />
               ))
             }

           </Board>
      </Wrapper>
       
    );
  }
}


