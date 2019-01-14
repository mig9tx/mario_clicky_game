import React from 'react';
import Title from "./components/Title";
// import Images from "./components/Images";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import './App.css';
import Score from "./components/Score";
import HighScore from './components/HighScore';
import Board from "./components/Board";

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
      console.log('componentDidMount');
    }
    componentDidUpdate(){
      console.log('componentDidMount')
    }
    


  render() {
    return (      
      <Wrapper>
           <Title title={this.state.title}/>
           <HighScore highScore={this.state.highScore}/>
           <Score score={this.state.score}/>
           <Board />
     </Wrapper>
       
    );
  }
}


