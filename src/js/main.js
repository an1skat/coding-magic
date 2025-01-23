import "../scss/style.scss";

import { initModals, initDropdown } from "./modules/modals";
import { renderGames } from "./modules/renderGames";
import ThemeSwitcher from "./modules/theme";
// import EmailSender from "./modules/mailer";

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

//import emailjs from "emailjs-com";

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
//   new EmailSender("service_8xruord", "template_dfiasow", "-FeNQYbQrAIFUSs9W", "form[data-email-form]");

  initModals();
  initDropdown();
  renderGames();
});
