import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <React.Fragment>
      <button
        className={`
      button
      ${props.operation ? "operation" : ""}
      ${props.double ? "double" : ""}
      ${props.triple ? "triple" : ""}
      `}
        onClick={(event) => props.click && props.click(props.label)}
      >
        {props.label}
      </button>
    </React.Fragment>
  );
}
export default Button;
