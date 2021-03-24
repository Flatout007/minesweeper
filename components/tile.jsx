import React from "react"
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const result = () => {
      if(this.props.ele.explored) { 
        if(this.props.ele.bombed) {
          return "B";
        } else return "E";
      } else {
        if(this.props.ele.flagged) {
          return "F";
        } else return "T";
      }
      // else if(this.props.ele.flagged) {
      //   return "F";
      // } else if (this.props.ele.explored) {
      //   return "E";
      // } else return "T";
    }

    return(
      <div>{result()}</div>
    ) 
  };
};

export default Tile;