(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const initModals = () => {
  const welcomeModal = document.querySelector(".modal--welcome");
  const thanksModal = document.querySelector(".modal-thanks");
  const welcomeText = document.querySelector(".header__welcome-text");
  const modalForm = document.querySelector(".modal__form");
  const overlay = document.querySelector("[data-modal-overlay]");
  const savedName = localStorage.getItem("userName");
  if (!savedName) {
    welcomeModal.classList.remove("is-hidden");
    overlay.classList.remove("is-hidden");
  }
  document.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal, overlay);
    });
  });
  savedName ? welcomeText.textContent = `Вітаємо,  ${savedName}!` : showModal(welcomeModal, overlay);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(welcomeModal, overlay);
    }
  });
  overlay.addEventListener("click", () => {
    closeModal(welcomeModal, overlay);
    closeModal(thanksModal, overlay);
  });
  welcomeText.addEventListener("click", () => {
    showModal(welcomeModal, overlay);
  });
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = modalForm.querySelector(".modal-input").value.trim();
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{4,20}$/;
    if (!nameRegex.test(name)) {
      alert(
        "Введіть нікнейм від 4 до 20 символів без викростання спеціальних символів"
      );
      return;
    }
    localStorage.setItem("userName", name);
    welcomeText.textContent = `Вітаємо, ${name}!`;
    closeModal(welcomeModal, overlay);
    showModal(thanksModal, overlay);
  });
};
const showModal = (modal, overlay) => {
  modal.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  overlay.classList.remove("is-hidden");
};
const closeModal = (modal, overlay) => {
  modal.classList.add("is-hidden");
  document.body.style.overflow = "";
  overlay.classList.add("is-hidden");
};
const initDropdown = () => {
  document.querySelectorAll(".header__nav-item").forEach((item) => {
    const link = item.querySelector(".header__nav-link");
    const dropdown = item.querySelector(".header__dropdown");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = dropdown.classList.contains("active");
      document.querySelectorAll(".dropdown").forEach((dd) => dd.classList.remove("active"));
      if (!isActive) dropdown.classList.add("active");
    });
  });
};
class biggestNum {
  constructor() {
    this.form = document.querySelector("[data-biggNum-form]");
    this.result = document.querySelector("[data-biggNum-result]");
    this.inputs = document.querySelectorAll("[data-biggNum-input]");
  }
  init() {
    if (!this.form || !this.result || this.inputs.length === 0) {
      console.error("Form, result element, or input not found.");
      return;
    }
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const numbers = Array.from(this.inputs).map(
        (input) => parseFloat(input.value)
      );
      if (numbers.some(isNaN)) {
        this.result.textContent = "Будь ласка, введіть коректні числа у всі поля";
        return;
      }
      const maxNum = Math.max(...numbers);
      this.result.textContent = `Найбільше число, яке ви ввели - ${maxNum}`;
    });
  }
}
class Scientists {
  constructor() {
    this.scientists = [
      { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
      { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
      { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
      { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
      { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
      {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
      },
      { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
      { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
      { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
      { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
      { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
      { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
    ];
    this.btns = document.querySelectorAll("[data-scientists-btn]");
    this.list = document.querySelector("[data-scientist-list]");
  }
  init() {
    this.renderScientists(this.scientists);
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.scientistsBtn;
        let filteredScientists = [];
        switch (value) {
          case "1":
            filteredScientists = this.filterByBornIn19thCentury();
            break;
          case "2":
            filteredScientists = this.sortByName();
            break;
          case "3":
            filteredScientists = this.sortByAge();
            break;
          case "4":
            filteredScientists = [this.findYoungestScientist()];
            break;
          case "5":
            filteredScientists = [this.scientists[0]];
            break;
          case "6":
            filteredScientists = this.filterBySurnameStartingWith("C");
            break;
          case "7":
            filteredScientists = this.filterByNameNotStartingWith("A");
            break;
          case "8":
            filteredScientists = this.findOldestAndYoungestScientists();
            break;
          case "9":
            filteredScientists = this.filterByMatchingInitials();
            break;
          default:
            console.log("Please choose a valid button.");
            return;
        }
        this.renderScientists(filteredScientists);
      });
    });
  }
  filterByBornIn19thCentury() {
    return this.scientists.filter((s) => s.born > 1801 && s.born < 1900);
  }
  sortByName() {
    return [...this.scientists].sort((a, b) => a.name.localeCompare(b.name));
  }
  sortByAge() {
    return [...this.scientists].sort(
      (a, b) => a.dead - a.born - (b.dead - b.born)
    );
  }
  findYoungestScientist() {
    return this.scientists.reduce(
      (youngest, s) => s.born > youngest.born ? s : youngest
    );
  }
  filterBySurnameStartingWith(letter) {
    return this.scientists.filter((s) => s.surname.startsWith(letter));
  }
  filterByNameNotStartingWith(letter) {
    return this.scientists.filter((s) => !s.name.startsWith(letter));
  }
  findOldestAndYoungestScientists() {
    const oldest = this.scientists.reduce(
      (oldest2, s) => s.dead - s.born > oldest2.dead - oldest2.born ? s : oldest2
    );
    const youngest = this.scientists.reduce(
      (youngest2, s) => s.dead - s.born < youngest2.dead - youngest2.born ? s : youngest2
    );
    return [oldest, youngest];
  }
  filterByMatchingInitials() {
    return this.scientists.filter((s) => s.name[0] === s.surname[0]);
  }
  renderScientists(arr) {
    this.list.innerHTML = "";
    arr.forEach((el) => {
      const renderEl = document.createElement("li");
      renderEl.classList.add("scientists__item");
      renderEl.innerHTML = `<p>${el.name} ${el.surname} <br /> ${el.born}-${el.dead}</p>`;
      this.list.appendChild(renderEl);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const biggestNumPrototype = new biggestNum();
  biggestNumPrototype.init();
  const scientistsPrototype = new Scientists();
  scientistsPrototype.init();
  initModals();
  initDropdown();
});
