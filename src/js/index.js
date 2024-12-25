import { initModals, initDropdown } from "./modules/modals";
import { initGamesFilter } from "./modules/filter";
import { renderGames } from "./modules/renderGames";
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
  const leapYearPrototype = new leapYear();
  const guessNumberPrototype = new guessNumber();
  const rockPaperScissorsPrototype = new rockPaperScissors();
  const calculatorPrototype = new calculator();
  const timeCalculatorPrototype = new timeCalculator();
  const googleDinoPrototype = new googleDino();
  const footballPrototype = new football();
  const biggestNumPrototype = new biggestNum();
  biggestNumPrototype.init();
  const ourTeamPrototype = new ourTeam();
  const scientistsPrototype = new scientists();

  initModals();
  initDropdown();
});
