export default class RockPaperScissors {
  constructor() {
    this.refs = {
      rockBtn: document.getElementById("rock-btn"),
      scissorsBtn: document.getElementById("scissors-btn"),
      paperBtn: document.getElementById("paper-btn"),
      resultText: document.querySelector(".rock-paper-scissors_result-text"),
      compChoice: document.querySelector(
        ".rock-paper-scissors_computer-version"
      ),
      compScore: document.getElementById("pc-score"),
      userScore: document.getElementById("user-score"),
    };
    this.userScore = 0;
    this.compScore = 0;
    this.compChoice = null;
    this.userChoice = null;
    this.eventListeners();
  }
  eventListeners() {
    this.refs.rockBtn.addEventListener("click", () => {
      this.userChoice = "Rock";
      this.computerVer();
      this.rules();
    });
    this.refs.scissorsBtn.addEventListener("click", () => {
      this.userChoice = "Scissors";
      this.computerVer();
      this.rules();
    });
    this.refs.paperBtn.addEventListener("click", () => {
      this.userChoice = "Paper";
      this.computerVer();
      this.rules();
    });
  }
  computerVer() {
    let compValue = Math.random();
    if (compValue <= 0.3) {
      this.compChoice = "Rock";
      this.refs.compChoice.innerHTML = "Комп'ютер обрав камінь";
    } else if (compValue <= 0.6) {
      this.compChoice = "Scissors";
      this.refs.compChoice.innerHTML = "Комп'ютер обрав ножиці";
    } else {
      this.compChoice = "Paper";
      this.refs.compChoice.innerHTML = "Комп'ютер обрав папір";
    }
  }
  rules() {
    if (
      (this.userChoice == "Paper" && this.compChoice == "Rock") ||
      (this.userChoice == "Scissors" && this.compChoice == "Paper") ||
      (this.userChoice == "Rock" && this.compChoice == "Scissors")
    ) {
      this.refs.resultText.innerHTML = "Ви виграли!";
      this.userScore += 1;
      this.refs.userScore.innerHTML = "Ви - " + this.userScore;
    } else if (this.userChoice == this.compChoice) {
      this.refs.resultText.innerHTML = "Нічия!";
    } else {
      this.refs.resultText.innerHTML = "Ви програли!";
      this.compScore += 1;
      this.refs.compScore.innerHTML = "Комп'ютер - " + this.compScore;
    }
  }
}
