import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operator: null,
  values: [0, 0],
  current: 0
};

export default class Calculadora extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState })
  }

  setOperation(operator) {
    if (this.state.current === 0) {
      this.setState({ operator, current: 1, clearDisplay: true })
    } else {
      const equals = operator === '='
      const currentOperation = this.state.operator
      const values = [...this.state.values]

      switch (currentOperation) {
        case '+':
          values[0] = values[0] + values[1];
          break;
        case '-':
          values[0] = values[0] + values[1]
          break;
        case '*':
          values[0] = values[0] * values[1]
          break;
        case '/':
          values[0] = values[0] / values[1]
          break;
        default:
          values[0] = this.state.values[0]
          break;
      }
      values[1] = 0

      this.setState({
        displayValue: values[0],
        operator: equals ? null : operator,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  addDigit(digit) {
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + digit

    this.setState({ displayValue, clearDisplay: false })

    if (digit !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue

      this.setState({ values })
      console.log(this.state.values)
    }

  }

  render() {
    return (
      <React.Fragment>
        <div className="calculator">
          <Display value={this.state.displayValue} />
          <Button label="AC" triple click={this.clearMemory} />
          <Button label="/" operation click={this.setOperation} />
          <Button label="7" click={this.addDigit} />
          <Button label="8" click={this.addDigit} />
          <Button label="9" click={this.addDigit} />
          <Button label="*" operation click={this.setOperation} />
          <Button label="4" click={this.addDigit} />
          <Button label="5" click={this.addDigit} />
          <Button label="6" click={this.addDigit} />
          <Button label="-" operation click={this.setOperation} />
          <Button label="1" click={this.addDigit} />
          <Button label="2" click={this.addDigit} />
          <Button label="3" click={this.addDigit} />
          <Button label="+" operation click={this.setOperation} />
          <Button label="0" double click={this.addDigit} />
          <Button label="." click={this.addDigit} />
          <Button label="=" operation click={this.setOperation} />
        </div>
      </React.Fragment>
    );
  }
}
