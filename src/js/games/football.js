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
            let x = event.clientX - rect.left - this.football.offsetWidth / 2;
            let y = event.clientY - rect.top - this.football.offsetHeight / 2;
             x = Math.max(0, Math.min(x, rect.width - this.football.offsetWidth));
             y = Math.max(0, Math.min(y, rect.height - this.football.offsetHeight));
            this.football.style.left = `${x}px`;
            this.football.style.top = `${y}px`;
        
        });
    }
}
const football = new Football();
football.click();
