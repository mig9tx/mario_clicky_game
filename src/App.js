import React, { Component } from 'react';
import Title from "./components/Title";
import Images from "./components/Images";
import Wrapper from "./components/Wrapper";
import smash from "./smash.json";
import './App.css';
import Score from "./components/Score";
import HighScore from './components/HighScore';

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    smash
  };

  

  render() {
    return (
      
      <Wrapper>
        <Title>Reactive Clicky Game</Title>
        <Score />
        <HighScore />

      
      {this.state.smash.map(smash => (
        <Images 
        id={smash.id}
        src={smash.image} 
        key={smash.id} 
        clicked={smash.clicked}
        />
      ))}
      </Wrapper>
       
    );
  }
}

export default App;
