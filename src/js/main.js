import "../scss/style.scss";

import { initModals, initDropdown } from "./modules/modals";
import { initGamesFilter } from "./modules/filter";
import { renderGames } from "./modules/renderGames";
import ThemeSwitcher from "./modules/theme";
import { games } from "./data/games";

import LeapYear from "./games/leapYear";
import GuessNumber from "./games/guessNumber";
import RockPaperScissors from "./games/rockPaperScissors";
import Calculator from "./games/calculator";
import TimeCalculator from "./games/timeCalculator";
import GoogleDino from "./games/googleDino";
import football from "./games/football";
import biggestNum from "./games/biggestNumber";
import OurTeam from "./games/ourTeam";
import Scientists from "./games/scientists";

document.addEventListener("DOMContentLoaded", () => {
  new LeapYear();
  new GuessNumber();
  new RockPaperScissors();
  new Calculator();
  new TimeCalculator();
  new GoogleDino();
  new football();
  new biggestNum();
  new OurTeam(".our-team");
  new Scientists();
  new ThemeSwitcher();

  initModals();
  initDropdown();
});
