import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Tile from "./tile"

class Board extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    console.log(this.props.board.grid)
    return (
    <div>
      {this.props.board.grid.map( (sub, i) => {
          return (<div key={i}>
            {sub.map( (el, j) => {
              return (<Tile
                key={j} 
                ele={el}
                updateGame={this.props.updateGame}
              />)
            })}
          </div>)
      })}
    </div>
    )
  };
};

export default Board;