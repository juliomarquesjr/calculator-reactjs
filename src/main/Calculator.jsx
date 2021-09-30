import React from "react";
import "./Calculator.css";
import Button from "../components/Button";

function Calculadora() {
  return (
    <React.Fragment>
      <div className="calculator">
        <Button label='AC' />
        <Button label='/' />
        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' />
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
        <Button label='0' />
        <Button label='.' />
        <Button label='=' />
      </div>
    </React.Fragment>
  );
}
export default Calculadora;
