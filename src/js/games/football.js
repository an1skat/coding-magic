export default class Football {
    constructor() {
        this.container = document.querySelector('.football-field'); // Поле
        this.football = document.querySelector('.football-img'); // М’яч
        if (!this.container || !this.football) {
            console.error("Елементи .football-field або .football-img не знайдено");
            return;
        }
        this.football.style.position = 'absolute';
        this.football.style.top = '0px';
        this.football.style.left = '0px';
    }
    followMouse() {
        if (!this.container || !this.football) return;
        this.container.addEventListener('mousemove', (event) => {
            const rect = this.container.getBoundingClientRect(); 
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            const ballX = Math.min(
                Math.max(mouseX - this.football.offsetWidth / 2, 0),
                rect.width - this.football.offsetWidth
            );
            const ballY = Math.min(
                Math.max(mouseY - this.football.offsetHeight / 2, 0),
                rect.height - this.football.offsetHeight
            );
            this.football.style.left = `${ballX}px`;
            this.football.style.top = `${ballY}px`;
        });
    }
}
const football = new Football();
football.followMouse();
