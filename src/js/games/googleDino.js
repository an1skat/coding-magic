export default class GoogleDino {
  constructor() {
    this.score = 0;
    this.scoreElement = document.getElementById("scoreElementId");
    this.object = document.getElementById("dino");
    this.section = document.querySelector(".dino-game");
    this.isJumping = false;
    this.jumpHeight = 100;
    this.gravity = 10;
    this.isGameRunning = false;

    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyF") {
        this.startGame();
      }
      if (this.isGameRunning && event.code === "KeyW") {
        this.jump();
      }
    });
  }

  startGame() {
    if (this.isGameRunning) return;
    this.isGameRunning = true;
    this.score = 0;
    this.updateScore();
    this.scoreInterval = setInterval(() => this.updateScore(), 100);
    console.log("Игра началась!");
  }

  updateScore() {
    if (!this.isGameRunning) return;
    this.score += 1;
    this.scoreElement.textContent = this.score;
  }

  jump() {
    if (!this.object || !this.isGameRunning) {
      console.error("Игра не запущена или объект не найден.");
      return;
    }
    if (this.isJumping) return;

    this.isJumping = true;
    let startPos = parseInt(getComputedStyle(this.object).bottom);
    let sectionHeight = this.section.offsetHeight;
    let maxJumpPos = Math.min(
      startPos + this.jumpHeight,
      sectionHeight - this.object.offsetHeight
    );

    let currentPos = startPos;
    let upInterval = setInterval(() => {
      if (currentPos >= maxJumpPos) {
        clearInterval(upInterval);
        let downInterval = setInterval(() => {
          if (currentPos <= startPos) {
            clearInterval(downInterval);
            this.isJumping = false;
          } else {
            currentPos -= this.gravity;
            this.object.style.bottom = currentPos + "px";
          }
        }, 20);
      } else {
        currentPos += this.gravity;
        this.object.style.bottom = currentPos + "px";
      }
    }, 20);
  }
}
//я сделал чтобы на f начиналась игра и все, у меня больше нет возможности что либо делать, сори
