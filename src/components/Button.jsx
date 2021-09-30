import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <React.Fragment>
      <button className="button">{props.label}</button>
    </React.Fragment>
  );
}export default Button
