import { toolBox } from "./toolbox.js";
export { validation };

const validation = {

  verifyEmail() {
    if (toolBox.emailValid()) {
      toolBox.emailStylingValid();
      return true;
    } else {
      toolBox.emailStylingInvalid();
      return false;
    }
  },

  verifyCountry() {
    if (toolBox.countryValid()) {
      toolBox.countryStylingValid();
      return true;
    } else {
      toolBox.countryStylingInvalid();
      return false;
    }
  },

  verifyPostal() {
    if (toolBox.postalValid()) {
      toolBox.postalStylingValid();
      return true;
    } else {
      toolBox.postalStylingInvalid();
      return false;
    }
  },

  verifyPassConfirmMatch() {
    if (toolBox.passMatch()) {
      toolBox.passMatchStylingValid();
      return true;
    } else {
      toolBox.passMatchStylingInvalid();
      return false;
    }
  },

  verifyAll() {
    const emailValidity = this.verifyEmail();
    const countryValidity = this.verifyCountry();
    const postalValidity = this.verifyPostal();
    const matchValidity = this.verifyPassConfirmMatch();
    if (emailValidity && countryValidity && postalValidity && matchValidity) {
      const messageContainer = document.querySelector("#message-container");
      messageContainer.replaceChildren();
      const message = document.createElement("p");
      message.textContent = "Submitted!";
      messageContainer.appendChild(message);
    } else {
      const messageContainer = document.querySelector("#message-container");
      messageContainer.replaceChildren();
      const message = document.createElement("p");
      message.textContent = "Not Submitted! Check inputs and try again.";
      messageContainer.appendChild(message);
    }
  },
};
