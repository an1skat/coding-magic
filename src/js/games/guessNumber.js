export default class guessNumber {
  constructor() {
    this.activateButton = document.querySelector("[data-guess-btn]")

    this.init();
  }

  init() {
    this.activateButton.addEventListener("click", this.guessNumber.bind(this));
  }

  guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const paragraph = document.querySelector('[data-guess-result]')
    const numberInput = document.querySelector('[data-guess-input]');
    if (numberInput.value == randomNumber) {
      paragraph.style.color = "green";
      paragraph.textContent = `Ви вгадали число! (${randomNumber})`;
      console.log("right");
    } else {
      paragraph.style.color = "red";
      paragraph.textContent = `Ви не вгадали число! (${randomNumber})`;
      console.log("wrong");
    }
    console.log(randomNumber);
    }
  }