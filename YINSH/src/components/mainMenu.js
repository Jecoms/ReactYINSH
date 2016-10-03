import React, { Component } from 'react';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="mainMenu">
          <button onClick={this.props.startGame}>New Game</button>
          <button>Find a Game</button>
          <button>How to Play</button>
        </div>
    )
  }
}

export default MainMenu;
