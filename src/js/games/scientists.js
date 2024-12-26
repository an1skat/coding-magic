export default class Scientists {
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
        id: 6,
      },
      { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
      { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
      { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
      { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
      { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
      { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
    ];
    this.btns = document.querySelectorAll("[data-scientists-btn]");
    this.list = document.querySelector("[data-scientist-list]");
  }

  init() {
    this.renderScientists(this.scientists);
    this.btns.forEach(btn => {
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
    return this.scientists.filter(s => s.born > 1801 && s.born < 1900);
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
    return this.scientists.reduce((youngest, s) =>
      s.born > youngest.born ? s : youngest
    );
  }

  filterBySurnameStartingWith(letter) {
    return this.scientists.filter(s => s.surname.startsWith(letter));
  }

  filterByNameNotStartingWith(letter) {
    return this.scientists.filter(s => !s.name.startsWith(letter));
  }

  findOldestAndYoungestScientists() {
    const oldest = this.scientists.reduce((oldest, s) =>
      s.dead - s.born > oldest.dead - oldest.born ? s : oldest
    );
    const youngest = this.scientists.reduce((youngest, s) =>
      s.dead - s.born < youngest.dead - youngest.born ? s : youngest
    );
    return [oldest, youngest];
  }

  filterByMatchingInitials() {
    return this.scientists.filter(s => s.name[0] === s.surname[0]);
  }

  renderScientists(arr) {
    this.list.innerHTML = "";
    arr.forEach(el => {
      const renderEl = document.createElement("li");
      renderEl.classList.add("scientists-item");
      renderEl.innerHTML = `<p>${el.name} ${el.surname} <br /> ${el.born}-${el.dead}</p>`;
      this.list.appendChild(renderEl);
    });
  }
}
