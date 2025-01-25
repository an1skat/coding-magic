export default class GoogleDino {
  constructor() {
    this.score = 0;
    this.scoreElement = document.getElementById("scoreElementId");
    setInterval(() => this.updateScore(), 100);

    this.object = document.getElementById("dino");
    this.section = document.querySelector(".dino-game"); // Секция, в которой находится динозавр
    this.isJumping = false;
    this.jumpHeight = 100;
    this.gravity = 10;

    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyW") {
        this.jump();
      }
    });
  }

  updateScore() {
    this.score += 1;
    this.scoreElement.textContent = this.score;
  }

  jump() {
    if (!this.object) {
      console.error("this.object is not defined or is null");
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
