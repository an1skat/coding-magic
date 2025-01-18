export default class TimeCalculator {
  constructor() {
    this.input = document.querySelector("[data-time-input]");
    this.btn = document.querySelector("[data-time-btn]");
    this.result = document.querySelector("[data-time-result]");

    this.init();
  }

  init() {
    this.btn.addEventListener("click", this.calcTime.bind(this));
  }

  calcTime(event) {
    event.preventDefault(); // Отмена отправки формы
    const time = parseFloat(this.input.value);
    if (isNaN(time) || time < 0) {
      return console.error(
        "Invalid input: time must be a non-negative number."
      );
    }
    let days = Math.floor(time / 1440);
    let hours = Math.floor((time % 1440) / 60);
    let minutes = Math.floor(time % 60);
    let seconds = Math.floor((time * 60) % 60);

    this.result.textContent = `${days}дн. ${hours}:${minutes}:${seconds}`;
  }
}
