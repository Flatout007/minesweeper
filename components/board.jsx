import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Tile from "./tile"

class Board extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    console.log(this.props, "THis one")
    return (
    <div>
      {this.props.board.grid.map( (sub, i) => {
          return (<div key={i}>
            {sub.map( (el, j) => {
              return (<Tile
                key={j} 
                index={el}
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