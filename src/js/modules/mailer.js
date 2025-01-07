import emailjs from "emailjs-com";

class EmailSender {
  constructor(serviceId, templateId, userId, formSelector) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.formSelector = formSelector;
    emailjs.init(userId);
    this.bindForm();
  }

  sendEmail(form) {
    const params = {
      to: form.email.value,
    };

    emailjs.send(this.serviceId, this.templateId, params).then(
      () => {
        const modal = document.querySelector(".modal--thanks");
        const overlay = document.querySelector("[data-modal-overlay]");
        if (modal && overlay) {
          this.showModal(modal, overlay);
        }
      },
      (error) => {
        alert("Email failed to send!");
        console.error("EmailJS Error:", error);
      }
    );
  }

  showModal(modal, overlay) {
    modal.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
    overlay.classList.remove("is-hidden");
  }

  bindForm() {
    const forms = document.querySelectorAll(this.formSelector);
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.sendEmail(e.target);
      });
    });
  }
}

export default EmailSender;
