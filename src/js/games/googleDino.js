export default class GoogleDino {
  constructor(scoreElementId) {
    this.score = 0;
    this.scoreElement = document.getElementById("scoreElementId");

    setInterval(() => this.updateScore(), 100);
  }
  updateScore() {
    this.score += 1;
    this.scoreElement.textContent = this.score;
  }
}
