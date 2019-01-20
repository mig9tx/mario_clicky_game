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
import Message from "./components/Message";
import Sound from 'react-sound'
import coinSound from './nsmb_coin.wav'
import loseSound from './nsmb_death.wav'
import stageClear from './nsmb_course_clear-bonus.wav'


export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards,
        title: 'Super Mario Memory Game',
        score: 0,
        highScore: 0,
        message: "Click on a each Mario card and try not to repeat to set the high score!" 
      }
    };
    componentDidMount(){
      this.setState({ cards: shuffle(this.state.cards) });
      console.log('componentDidMount');
    }
    componentDidUpdate(){
      console.log('componentDidUpdate')
    }
    shuffleCards(){
      this.setState({ cards: shuffle(this.state.cards) });
    }
    //call back of card.id in order to check if card "clicked" is true || false.
    handleCardClick = (id) => {
      console.log("cardClick function working", id);
      let guessedRight = false;
      let cards = this.state.cards.map(card => {
        console.log(this.state.cards);
        if (card.id === id) {
          if(!card.clicked) {
            card.clicked = true;
            guessedRight = true;
          }
        }
        console.log(card);
        return card;
      });
      //if false, convert "clicked" to true, increment score by 1 and highScore by one, call shuffleCards again
      //if true, game ends, state reset to default
      guessedRight ? this.rightGuess(cards) : this.wrongGuess(cards);
    };

    rightGuess = (cards) => {
      let sound = new Audio(coinSound);
      sound.play();
      let newScore = this.state.score;
      newScore++;
      let rightMessage = "Correct!"
      let newHighScore = Math.max(newScore, this.state.highScore);
      console.log(newHighScore, this.state.highScore)
      if (newScore > 9) {
        let sound = new Audio (stageClear);
        sound.play();
      }
      this.setState({
        cards: shuffle(cards),
        score: newScore,
        highScore: newHighScore,
        message: rightMessage
      });
      console.log("user guessed correctly");
    }

    wrongGuess = (cards) => {
      let sound = new Audio(loseSound);
      sound.play();
      let wrongMessage = "GAME OVER, Try Again!"
      this.setState({
        cards: this.resetCards(cards),
        score: 0,
        message: wrongMessage
      })
    }

    resetCards = (cards) => {
     const resetCards = cards.map(card => ({...card, clicked: false}));
     return shuffle(resetCards);
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
            <div id="portfolio-link">
                <a href="https://mig9tx.github.io/#portfolio">Portfolio</a>
            </div>
            <div id="portfolio-link">
                <a href="https://github.com/mig9tx/mario_clicky_game">GitHub</a>
            </div>
            <Title title={this.state.title}/>
           <HighScore highScore={this.state.highScore}/>
           <Score score={this.state.score}/>
           <Message message={this.state.message}/>
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


