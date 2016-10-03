import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
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
  incrementTime(){
    this.setState({ timeElapsed: this.state.timeElapsed + 1 });
  }
  componentDidMount(){
    setInterval(() => this.incrementTime(), 1000);
  }
  render() {
    return (
      <div className="game">
        <div>
          <p>Game Start! || Player 1: {this.state.playerOne.ringsScored} Rings || Player 2: {this.state.playerOne.ringsScored} Rings</p>
          <p>Time Elapsed: {('0' + Math.floor(this.state.timeElapsed/3600) % 24).slice(-2)}:{('0' + Math.floor(this.state.timeElapsed/60) % 60).slice(-2)}:{('0' + this.state.timeElapsed % 60).slice(-2)}</p>
          <div>
            Insert Game Board
          </div>
         </div>
      </div>
    )
  }
}

export default Game;
