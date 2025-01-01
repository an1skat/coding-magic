export const initModals = () => {
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
      const name = modalForm.querySelector("[data-modal-input]").value.trim();
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
    const link = document.querySelector("[data-dropdown-open]");
    const dropdown = document.querySelector("[data-dropdown]");
    const arrow = link.querySelector("[data-dropdown-arrow]")

    link.addEventListener("click", e => {
        e.preventDefault();
        dropdown.classList.toggle("active")
        arrow.classList.toggle('rotate')
    })
};
