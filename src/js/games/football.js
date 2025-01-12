export default class Football {
    constructor() {
        this.container = document.querySelector('.football-field');
        this.football = document.querySelector('.football-img'); 
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
            const rect = this.container.getBoundingClientRect(); // Отримуємо координати поля
            const styles = getComputedStyle(this.container);

            const borderWidth = parseInt(styles.borderLeftWidth, 10) || 0;
            const borderHeight = parseInt(styles.borderTopWidth, 10) || 0;

            let x = event.clientX - rect.left - this.football.offsetWidth / 2;
            let y = event.clientY - rect.top - this.football.offsetHeight / 2;

            x = Math.max(borderWidth, Math.min(x, rect.width - this.football.offsetWidth - borderWidth));
            y = Math.max(borderHeight, Math.min(y, rect.height - this.football.offsetHeight - borderHeight));

            console.log(`Обмежені координати м'яча: x: ${x}, y: ${y}`);
            this.football.style.left = `${x}px`;
            this.football.style.top = `${y}px`;
        });
    }
}

const football = new Football();
football.click();

