export const initModals = () => {
  const welcomeModal = document.querySelector(".welcome-modal");
//   const thanksModal = null;
  const welcomeText = document.querySelector(".welcome-text");
  const overlay = document.querySelector("[data-modal-overlay]");
  const modalForm = document.querySelector(".modal-form");

  const savedName = localStorage.getItem("userName");

  savedName ? (welcomeText.textContent = `Вітаємо,  ${savedName}!`) : showModal(welcomeModal, overlay);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal(welcomeModal, overlay);
    //   closeModal(thanksModal);
    }
  });
  document.querySelectorAll("[data-modal-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal, overlay);
    });
  });
  overlay.addEventListener("click", () => {
    closeModal(welcomeModal, overlay);
    // closeModal(thanksModal);
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
    // showModal(thanksModal);
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
