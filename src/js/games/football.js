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
    click() {
        if (!this.container || !this.football) return;
        this.container.addEventListener('click', (event) => {
            const rect = this.container.getBoundingClientRect(); 
            const ballX = event.clientX - rect.left - this.football.offsetWidth / 2;
            const ballY = event.clientY - rect.top - this.football.offsetWidth / 2;
            this.football.style.left = `${ballX}px`;
            this.football.style.top = `${ballY}px`;
        });
    }
}
const football = new Football();
football.click();
