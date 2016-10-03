import React, { Component } from 'react';
import MainMenu from './mainMenu';
import Game from './game';

class GameWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGame: false
    }
  }
  startNewGame() {
    this.setState({ activeGame: true })
  }
  render() {
    let view =  (this.state.activeGame)
                        ? <Game />
                        : <MainMenu startGame={() => this.startNewGame()} />;
    return (
      <div className="gameWindow">
        {view}
      </div>
    )
  }
}

export default GameWindow;
