export default class LeapYear {
    constructor() {
        this.activateButton = document.querySelector("[data-leap-year-btn]");

        this.init();
    }

    init() {
        this.activateButton.addEventListener("click", this.leapYear.bind(this));
    }

    leapYear() {
          const numberInput = document.querySelector("[data-leap-year-input]");
          const paragraph = document.querySelector("[data-leap-year-result]");

          if (numberInput.value % 4 == 0 && numberInput.value % 100 !== 0) {
            paragraph.style.color = "green";
            paragraph.textContent = "Ви народилися у високосний рік!";
          } else {
            paragraph.style.color = "red";
            paragraph.textContent = "Ви народилися не у високосний рік!";
          }
    }
}