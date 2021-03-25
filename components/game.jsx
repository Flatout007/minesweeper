import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board";
import Popup from "./popup"

class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(2, 1);
    // this.board = Minesweeper.Board;

    this.state = {
      board: board

    };

    this.updateGame = this.updateGame.bind(this)
  };

  updateGame() {
    this.setState( {board: this.state.board} );
  }

  render() {
    // console.log(this.state.board)

    const wonOrLost = () => {
      if(this.state.board.lost()) {
        return <Popup lost="true" won="false"/>
      } else if(this.state.board.won()) {
        return <Popup lost="false" won="true"/>
      }
    } 

    return (
      
      <div>
        {wonOrLost()}
        <Board 
        board={this.state.board}
        updateGame={this.updateGame}
        />
      </div>
    )
  };
};

export default Game;