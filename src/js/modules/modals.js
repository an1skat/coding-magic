export const initModals = () => {
  const welcomeModal = document.querySelector(".welcome-modal");
  const thanksModal = document.querySelector(".thanks-modal");
  const welcomeText = document.querySelector(".welcome-text");
  const modalForm = document.querySelector(".modal-form");

  const overlay = document.querySelector("[data-modal-overlay]");

  const savedName = localStorage.getItem("userName");

  document.querySelectorAll("[data-modal-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const  modal = btn.closest(".modal");
      closeModal(modal, overlay);
    });
  });
  savedName
      ? (welcomeText.textContent = `Вітаємо,  ${savedName}!`)
      : showModal(welcomeModal, overlay);

    document.addEventListener("keydown", e => {
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

    modalForm.addEventListener("submit", e => {
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

export const initDropdown = () => {
  document.querySelectorAll(".nav-item").forEach(item => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown");

    link.addEventListener("click", e => {
      e.preventDefault();

      const isActive = dropdown.classList.contains("active");
      document
        .querySelectorAll(".dropdown")
        .forEach(dd => dd.classList.remove("active"));

      if (!isActive) dropdown.classList.add("active");
    });
  });
};
