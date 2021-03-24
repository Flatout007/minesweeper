import React from "react"
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board
    }

    this.flagBombs = this.flagBombs.bind(this);
  }
  
  flagBombs(e) {
    if (e.altKey) {
      console.log("BOMBFLAGGED")
      this.props.ele.toggleFlag();
      this.setState({ board: this.state.board});
    } else {
      this.props.ele.explore();
      this.setState({ board: this.state.board });
    }
  }

  render() {
    // console.log(this.props)
    const result = () => {
      if(this.props.ele.explored && this.props.ele.adjacentBombCount() >= 1) { 
        return this.props.ele.adjacentBombCount().toString();
      } else if(this.props.ele.flagged) {
        return "F";
      } else return "T";
      // if(this.props.ele.bombed) {
      //     return "This";
      //   } else if(!this.props.ele.bombed) {
      //     return "E";
      //   }
      //   if(this.props.ele.flagged) {
      //     return "F";
      //   } else return "T";
      // else if(this.props.ele.flagged) {
      //   return "F";
      // } else if (this.props.ele.explored) {
      //   return "E";
      // } else return "T";
      // this.props.ele.explore
    }

    return(
      <div className="tile" onClick={this.flagBombs}>{result()}</div>
    ) 
  };
};

export default Tile;