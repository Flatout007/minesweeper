import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board"

class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(5, 5);
    // this.board = Minesweeper.Board;

    this.state = {
      board: board

    };

    this.updateGame = this.updateGame.bind(this)
  };

  updateGame() {

  }

  render() {
    // console.log(this.state.board)
    return (
      <div>
        <Board 
        board={this.state.board}
        updateGame={this.updateGame}
        />
      </div>
    )
  };
};

export default Game;