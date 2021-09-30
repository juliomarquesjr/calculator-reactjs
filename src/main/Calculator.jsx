import React from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

function Calculadora() {
  function clearMemory() {
    console.log("Limpar");
  }

  function setOperation(oper) {
    console.log("Operação: " + oper);
  }

  function addDigit(digit) {
    console.log("Digito: " + digit);
  }

  return (
    <React.Fragment>
      <div className="calculator">
        <Display value={100} />
        <Button label="AC" triple click={() => clearMemory()} />

        {/* Apenas uma forma diferente de declarar usando Arrowfunction*/}
        <Button label="/" operation click={(event) => setOperation(event)} />

        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" operation click={setOperation} />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" operation click={setOperation} />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" operation click={setOperation} />
        <Button label="0" double click={addDigit} />
        <Button label="." click={addDigit} />
        <Button label="=" operation click={setOperation} />
      </div>
    </React.Fragment>
  );
}
export default Calculadora;
