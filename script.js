class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    currentOperandTextElement.innerText = '';
    previousOperandTextElement.innerText = '';
    this.operation = undefined;
  }

  delete() {
    currentOperandTextElement.innerText = '';
  }

  appendNumber(number) {
    if (number === '.' && currentOperandTextElement.innerText.includes('.')) return;
    this.currentOperandTextElement.innerText = currentOperandTextElement.innerText.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (currentOperandTextElement.innerText === '') return;
    if (previousOperandTextElement.innerText !== '') {
      this.compute();
    }
    this.operation = operation;
    previousOperandTextElement.innerText = currentOperandTextElement.innerText + ' ' + operation;
    currentOperandTextElement.innerText = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(previousOperandTextElement.innerText);
    const current = parseFloat(currentOperandTextElement.innerText);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }

    currentOperandTextElement.innerText = computation;
    this.operation = undefined;
    previousOperandTextElement.innerText = '';
  }

  updateDisplay() {
    currentOperandTextElement.innerText = currentOperandTextElement.innerText;
    previousOperandTextElement.innerText = previousOperandTextElement.innerText;
  }
}

const numberButtons = $('.data-number');
const operationButtons = $('.data-operation');
const equalsButton = $('.data-equals');
const allClearButton = $('.all-clear-button');
const clearButton = $('.clear-button');
const currentOperandTextElement = document.getElementById('current-operand');
const previousOperandTextElement = document.getElementById('previous-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.click(function (event) {
  calculator.appendNumber(event.target.id);
  calculator.updateDisplay();
});

operationButtons.click(function (event) {
  calculator.chooseOperation(event.target.id);
  calculator.updateDisplay();
});

allClearButton.click(function () {
  calculator.clear();
});

clearButton.click(function () {
  calculator.delete();
  calculator.updateDisplay();
});

equalsButton.click(function () {
  calculator.compute(this.oper);
});
