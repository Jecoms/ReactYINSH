import React, { Component } from 'react';
import MainMenu from './mainMenu';

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
    if (this.state.activeGame) {
      return (
        <div className="gameWindow">
          <Game />
        </div>
      )
    }
    return (
      <div className="gameWindow">
        <MainMenu startGame={() => this.startNewGame()} />
      </div>
    )
  }
}

export default GameWindow;
