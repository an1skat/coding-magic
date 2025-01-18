export default class GoogleDino {
  constructor() {
    this.score = 0;
    this.scoreElement = document.getElementById("scoreElementId");
    setInterval(() => this.updateScore(), 100);

    this.object = document.getElementById("dino");
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
    if (this.isJumping) console.log("bob");

    this.isJumping = true;
    let startPos = parseInt(getComputedStyle(this.object).bottom);
    let currentPos = startPos;
    let upInterval = setInterval(() => {
      if (currentPos >= startPos + this.jumpHeight) {
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
