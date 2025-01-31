export default class GoogleDino {
    constructor() {
      this.canvas = document.createElement("canvas");
      this.canvas.width = 600;
      this.canvas.height = 150;
      document.querySelector(".game").appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      
      this.dino = new Image();
      this.dino.src = "./src/img/cooldinogoogleDino.png";
      this.dinoX = 50;
      this.dinoY = this.canvas.height - 40;
      this.isJumping = false;
      
      this.cactusImg = new Image();
      this.cactusImg.src = "./src/img/googleDino-cactus.png";
      this.cactuses = [];
      
      this.score = 0;
      this.isGameOver = false;
      
      this.init();
    }
  
    init() {
      document.addEventListener("keydown", (e) => e.code === "Space" && this.jump());
      document.querySelector(".game").addEventListener("click", () => this.jump());
      
      this.spawnCactus();
      requestAnimationFrame(() => this.update());
    }
  
    spawnCactus() {
      if (this.isGameOver) return;
      
      const type = Math.random() > 0.5 ? "tall" : "small";
      const height = type === "tall" ? 60 : 30;
      this.cactuses.push({ x: this.canvas.width, y: this.canvas.height - height, width: 20, height });
      
      setTimeout(() => this.spawnCactus(), Math.random() * 1500 + 1000);
    }
  
    jump() {
      if (!this.isJumping && !this.isGameOver) {
        this.isJumping = true;
        let jumpHeight = 80;
        let velocity = -5;
        let gravity = 0.2;
        
        const jumpInterval = setInterval(() => {
          this.dinoY += velocity;
          velocity += gravity;
          
          if (this.dinoY >= this.canvas.height - 40) {
            this.dinoY = this.canvas.height - 40;
            this.isJumping = false;
            clearInterval(jumpInterval);
          }
        }, 16);
      }
    }
  
    checkCollision(cactus) {
      return (
        this.dinoX < cactus.x + cactus.width &&
        this.dinoX + 30 > cactus.x &&
        this.dinoY < cactus.y + cactus.height &&
        this.dinoY + 30 > cactus.y
      );
    }
  
    gameOver() {
      this.isGameOver = true;
    }
  
    update() {
      if (this.isGameOver) return;
      
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.ctx.drawImage(this.dino, this.dinoX, this.dinoY, 30, 30);
      
      this.cactuses.forEach((cactus, index) => {
        cactus.x -= 3;
        this.ctx.drawImage(this.cactusImg, cactus.x, cactus.y, cactus.width, cactus.height);
        
        if (this.checkCollision(cactus)) this.gameOver();
        if (cactus.x + cactus.width < 0) this.cactuses.splice(index, 1);
      });
      
      this.score++;
      document.getElementById("score").textContent = Math.floor(this.score / 15);
      
      requestAnimationFrame(() => this.update());
    }
  }
  