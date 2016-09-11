import React, { Component } from 'react';

class GameWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGame: false
    }
  }
  render() {
    if (this.state.activeGame) {
      return (
        <div>
          Game Running...
        </div>
      )
    }
    return (
      <div className="App">
        <div>
          <button>New Game</button>
          <button>Find a Game</button>
          <button>How to Play</button>
        </div>
      </div>
    )
  }
}

export default GameWindow;
