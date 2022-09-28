class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    this.currentOperandTextElement = '';
    this.previousOperandTextElement = '';
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperandTextElement.innerText = currentOperandTextElement.innerText.toString() + number.toString();
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperandTextElement.innerText;
  }
}

const numberButtons = $('.data-number');
const operationButtons = $('.data-operation');
const equalsButton = $('.data-equals');
const allClearButton = $('.all-clear-button');
const clearButton = $('.clear-button');
const currentOperandTextElement = document.getElementById('current-operand');
const previousOperandTextElement = $('.previous-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.click(function (event) {
  calculator.appendNumber(event.target.id);
  calculator.updateDisplay();
});
