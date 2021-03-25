import React from "react"
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    if (e.altKey) {
      console.log("BOMBFLAGGED")
      this.props.ele.toggleFlag();
    } else {
      this.props.ele.explore();
      e.target.classList.add("tile-clicked");
    };
    this.props.updateGame();
  }

  render() {
    // console.log(this.props)
    const result = () => {
      if(this.props.ele.explored && this.props.ele.adjacentBombCount() >= 1) { 
        return this.props.ele.adjacentBombCount().toString();
      } else if(this.props.ele.flagged) {
        return "F";
      } else return "T";
    }

    return(
      <div className="tile" onClick={this.handleClick}>{result()}</div>
    ) 
  };
};

export default Tile;