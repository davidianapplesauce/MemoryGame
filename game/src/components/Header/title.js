import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="title">{props.children}</div>
      <div className="score">
      <h3>You'll Wanna Forget These Images Quickly, So Be Careful!</h3>
        Score: {props.score} <br></br> Highscore: {props.highscore}
      </div>
    </div>
  );
}

export default Header;
