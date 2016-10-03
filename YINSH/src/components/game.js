import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        ringsScored: 0,
      },
      playerTwo: {
        ringsScored: 0,
      },
      playerTurn: 1,
      winningPlayer: 0,
    }
  }
  checkGameWon() {
    // refactor to check winningPlayer and call gameVictory method passing in victor
    if (this.state.playerOne.ringsScored > 2) {
      this.setState({ winningPlayer: 1 })
    }
    if (this.state.playerTwo.ringsScored > 2) {
      this.setState({ winningPlayer: 2 })
    }
  }
  render() {
    return (
      <div className="game">
        <div>
          <p>Game Start! || Player 1: 0 Rings || Player 2: 0 Rings</p>

          <div>
            Insert Game Board
          </div>
         </div>
      </div>
    )
  }
}

export default Game;
