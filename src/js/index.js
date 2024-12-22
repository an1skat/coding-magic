import { initModals } from "./modules/modals";
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
  const leapYear = new leapYear();
  const guessNumber = new guessNumber();
  const rockPaperScissors = new rockPaperScissors();
  const calculator = new calculator();
  const timeCalculator = new timeCalculator();
  const googleDino = new googleDino();
  const football = new football();
  const biggestNum = new biggestNum();
  const ourTeam = new ourTeam();
  const scientists = new scientists();
});
