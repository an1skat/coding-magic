export default class OurTeam {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.slider = this.container.querySelector("[data-slider]");
    this.cards = this.container.querySelectorAll("[data-slider-card]");
    this.dotsContainer = this.container.querySelector("[data-slider-dots]");
    this.prevBtn = this.container.querySelector("[data-slider-prev]");
    this.nextBtn = this.container.querySelector("[data-slider-next]");
    this.cardCount = 6;
    this.activeIndex = 0;

    this.init();
  }

  init() {
    this.createDots();
    this.updateSlider();
    this.bindEvents();
  }

  createDots() {
    if (this.dotsContainer.children.length > 0) return;

    for (let i = 0; i < this.cardCount; i++) {
      const li = document.createElement("li");
      li.classList.add("our-team__dots-item");

      const dot = document.createElement("button");
      dot.classList.add("our-team__dot");
      dot.dataset.sliderDot = i;

      if (i === this.activeIndex) dot.classList.add("our-team__dot--active");

      li.appendChild(dot);
      this.dotsContainer.appendChild(li);
    }
  }

  updateSlider() {
    console.log(this.cards[0].offsetWidth);
    const offset = -this.activeIndex * this.cards[0].offsetWidth;
    this.slider.style.transform = `translateX(${offset}px)`;
    this.updateDots();
  }

  updateDots() {
    this.dotsContainer
      .querySelectorAll("[data-slider-dot]")
      .forEach((dot, index) => {
        dot.classList.toggle(
          "our-team__dot--active",
          index === this.activeIndex
        );
      });
  }

  nextSlide() {
    if (this.activeIndex < this.cards.length - 1) {
      this.activeIndex++;
      this.updateSlider();
    }
  }

  prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.updateSlider();
    }
  }

  goToSlide(index) {
    this.activeIndex = index;
    this.updateSlider();
  }

  bindEvents() {
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    this.dotsContainer.addEventListener("click", (e) => {
      const dot = e.target.closest("[data-slider-dot]");
      if (dot) {
        const index = parseInt(dot.dataset.sliderDot, 10);
        this.goToSlide(index);
      }
    });
  }
}
