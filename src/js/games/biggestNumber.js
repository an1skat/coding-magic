export default class biggestNum {
  constructor() {
    this.form = document.querySelector("[data-biggNum-form]");
    this.result = document.querySelector("[data-biggNum-result]");
    this.inputs = document.querySelectorAll("[data-biggNum-input]");
  }

  init() {
    if (!this.form || !this.result || this.inputs.length === 0) {
      console.error("Form, result element, or input not found.");
      return;
    }

    this.form.addEventListener("submit", e => {
      e.preventDefault();

      const numbers = Array.from(this.inputs).map(input =>
        parseFloat(input.value)
      );

      if (numbers.some(isNaN)) {
        this.result.textContent =
          "Будь ласка, введіть коректні числа у всі поля";
        return;
      }

      const maxNum = Math.max(...numbers);
      this.result.textContent = `Найбільше число, яке ви ввели - ${maxNum}`;
    });
  }
}
