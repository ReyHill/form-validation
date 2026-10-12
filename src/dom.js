export { renderForm };
import { validation } from "./validate.js";

function renderForm() {
  const formElement = document.createElement("form");

  const messageContainer = document.createElement("div");

  const emailContainer = document.createElement("div");
  const countryContainer = document.createElement("div");
  const postalContainer = document.createElement("div");
  const passContainer = document.createElement("div");
  const confirmContainer = document.createElement("div");

  const emailLabel = document.createElement("label");
  const countryLabel = document.createElement("label");
  const postalLabel = document.createElement("label");
  const passLabel = document.createElement("label");
  const confirmLabel = document.createElement("label");

  const emailInput = document.createElement("input");
  const countryInput = document.createElement("input");
  const postalInput = document.createElement("input");
  const passInput = document.createElement("input");
  const confirmInput = document.createElement("input");

  const submitBtn = document.createElement("button");

  formElement.noValidate = true;

  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Enter email: ";

  countryLabel.htmlFor = "country";
  countryLabel.textContent = "Enter Country: ";

  postalLabel.htmlFor = "postal";
  postalLabel.textContent = "Enter Postal Code: ";

  passLabel.htmlFor = "pass";
  passLabel.textContent = "Enter Password: ";

  confirmLabel.htmlFor = "confirm";
  confirmLabel.textContent = "Confirm Password: ";

  messageContainer.id = "message-container"; // keep or remove?
  emailInput.id = "email";
  countryInput.id = "country";
  postalInput.id = "postal";
  passInput.id = "pass";
  confirmInput.id = "confirm";

  emailInput.type = "email";
  emailInput.required = true;

  countryInput.type = "text";
  countryInput.required = true;

  postalInput.type = "text";
  postalInput.required = true;

  passInput.type = "password";
  passInput.required = true;

  confirmInput.type = "password";
  confirmInput.required = true;

  submitBtn.textContent = "Submit";
  submitBtn.type = "button";

  emailInput.addEventListener('blur', () => {
    validation.verifyEmail();
  }); 

  countryInput.addEventListener('blur', () => {
    validation.verifyCountry(); 
  });

  postalInput.addEventListener('blur', () => {
    validation.verifyPostal(); 
  }); 

  passInput.addEventListener('blur', () => {
    validation.verifyPassConfirmMatch(); 
  }); 

  confirmInput.addEventListener('blur', () => {
    validation.verifyPassConfirmMatch();
  });

  submitBtn.addEventListener("click", () => {
    validation.verifyAll(); 
  });

  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);

  countryContainer.appendChild(countryLabel);
  countryContainer.appendChild(countryInput);

  postalContainer.appendChild(postalLabel);
  postalContainer.appendChild(postalInput);

  passContainer.appendChild(passLabel);
  passContainer.appendChild(passInput);

  confirmContainer.appendChild(confirmLabel);
  confirmContainer.appendChild(confirmInput);

  formElement.appendChild(messageContainer);
  formElement.appendChild(emailContainer);
  formElement.appendChild(countryContainer);
  formElement.appendChild(postalContainer);
  formElement.appendChild(passContainer);
  formElement.appendChild(confirmContainer);
  formElement.appendChild(submitBtn);

  document.body.appendChild(formElement);
}
