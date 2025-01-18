export default class Calculator {
  constructor() {
    this.refs = {
      firstInput: document.getElementById("first-num"),
      secondInput: document.getElementById("second-num"),
      sumButton: document.getElementById("+"),
      minButton: document.getElementById("-"),
      multButton: document.getElementById("*"),
      divisButton: document.getElementById("/"),
      resultButton: document.querySelector(".calculator_btn"),
      valueText: document.querySelector(".calculator_value-text"),
    };
    this.operation = null;
    this.eventListeners();
  }

  eventListeners() {
    this.refs.sumButton.addEventListener("click", () => {
      this.operation = "+";
    });
    this.refs.minButton.addEventListener("click", () => {
      this.operation = "-";
    });
    this.refs.multButton.addEventListener("click", () => {
      this.operation = "*";
    });
    this.refs.divisButton.addEventListener("click", () => {
      this.operation = "/";
    });

    this.refs.resultButton.addEventListener("click", () => {
      const a = parseFloat(this.refs.firstInput.value);
      const b = parseFloat(this.refs.secondInput.value);

      if (isNaN(a) || isNaN(b)) {
        this.refs.valueText.innerHTML = "Помилка! Введіть числа!";
        return;
      }

      const result = this.calculator(a, b, this.operation);
      if (result !== null) {
        this.refs.valueText.innerHTML = result;
      }
    });
  }

  calculator(a, b, operation) {
    let result = null;
    switch (operation) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b == 0) {
          this.refs.valueText.innerHTML = "На нуль не ділиться!";
          return null;
        }
        result = a / b;
        break;
      default:
        this.refs.valueText.innerHTML = "Помилка! Оберіть операцію!";
        return null;
    }
    return result;
  }
}
