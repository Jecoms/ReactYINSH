import React, { Component } from 'react';
import GameWindow from './components/gameWindow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YINSH</h1>

        <GameWindow />
      </div>
    );
  }
}

export default App;
