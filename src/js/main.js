import "../scss/style.scss";

import { initModals, initDropdown } from "./modules/modals";
import { initGamesFilter } from "./modules/filter";
import { renderGames } from "./modules/renderGames";
import ThemeSwitcher from "./modules/theme";
import { games } from "./data/games";

import leapYear from "./games/leapYear";
import guessNumber from "./games/guessNumber";
import rockPaperScissors from "./games/rockPaperScissors";
import calculator from "./games/calculator";
import timeCalculator from "./games/timeCalculator";
import googleDino from "./games/googleDino";
import football from "./games/football";
import biggestNum from "./games/biggestNumber";
import ourTeam from "./games/ourTeam";
import scientists from "./games/scientists";

document.addEventListener("DOMContentLoaded", () => {
  new leapYear();
  new guessNumber();
  new rockPaperScissors();
  new calculator();
  new timeCalculator();
  new googleDino();
  new football();
  new biggestNum();
  new ourTeam(".our-team");
  new scientists();
  new ThemeSwitcher();

  initModals();
  initDropdown();
});
