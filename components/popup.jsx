import React from "react";

export const Popup = props => {
 

  if(props.won) {
    return (
      <h1 className="Popup">You have won!</h1>
    )
  } else {
    return (
      <h1 className="Popup">You lost!</h1>
    )
  }
}