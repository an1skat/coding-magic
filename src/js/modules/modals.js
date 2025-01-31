export const initModals = () => {
  const welcomeModal = document.querySelector(".modal--welcome");
  const thanksModal = document.querySelector(".modal--thanks");
  const welcomeText = document.querySelector(".header__welcome-text");
  const modalForm = document.querySelector(".modal__form");
  const overlay = document.querySelector("[data-modal-overlay]");
  const savedName = localStorage.getItem("userName");

  if (!savedName) {
    showModal(welcomeModal, overlay);
  } else {
    welcomeText.textContent = `Вітаємо,  ${savedName}!`;
  }

  setupModalCloseButtons(overlay);
  setupEscapeKeyListener(welcomeModal, overlay);
//   setupEscapeKeyListener(thanksModal, overlay);
  setupOverlayClickListener(overlay, welcomeModal, thanksModal);
  setupWelcomeTextClickListener(welcomeModal, overlay);
  setupFormSubmission(modalForm, welcomeText, welcomeModal, overlay);
//   setupFormSubmission(thanksForm, welcomeText, thanksModal, overlay, 1);
};

const setupModalCloseButtons = (overlay) => {
  document.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal, overlay);
    });
  });
};

const setupEscapeKeyListener = (welcomeModal, overlay) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(welcomeModal, overlay);
    }
  });
};

const setupOverlayClickListener = (overlay, welcomeModal, thanksModal) => {
  overlay.addEventListener("click", () => {
    closeModal(welcomeModal, overlay);
    closeModal(thanksModal, overlay);
  });
};

const setupWelcomeTextClickListener = (welcomeModal, overlay) => {
  const welcomeText = document.querySelector(".header__welcome-text");
  welcomeText.addEventListener("click", () => {
    showModal(welcomeModal, overlay);
  });
};

const setupFormSubmission = (
  modalForm,
  welcomeText,
  welcomeModal,
  overlay,
  indicator = 0
) => {
  if (indicator === 0) {
    modalForm.addEventListener("submit", (e) => {
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
    });
  } else {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();

      showModal(welcomeModal, overlay);
    });
  }
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
  const arrow = link.querySelector("[data-dropdown-arrow]");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
    arrow.classList.toggle("rotate");
  });
};
