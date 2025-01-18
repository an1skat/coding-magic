export const renderGames = () => {
  const sections = document.querySelectorAll("[data-sect]");
  const changeBtns = document.querySelectorAll("[data-changeBtn]");

  changeBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const choice = btn.dataset.changebtn;

      sections.forEach((sect) => {
        if (choice === "all") {
            sect.classList.remove("visually-hidden")
            return;
        }
        sect.classList.remove("visually-hidden")
        if (sect.dataset.sect !== choice) sect.classList.add("visually-hidden");
      });
    })
  );
};
