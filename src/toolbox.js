export const toolBox = {
  get email() {
    return document.querySelector("#email");
  },

  get country() {
    return document.querySelector("#country");
  },

  get postal() {
    return document.querySelector("#postal");
  },

  get pass() {
    return document.querySelector("#pass");
  },

  get confirm() {
    return document.querySelector("#confirm");
  },

  emailValid() {
    return this.email.checkValidity();
  },

  emailStylingValid() {
    this.email.classList.add("valid");
    this.email.classList.remove("invalid");
  },

  emailStylingInvalid() {
    this.email.classList.add("invalid");
    this.email.classList.remove("valid");
  },

  countryValid() {
    const countryValue = this.country.value.trim();
    return /^[A-Za-z ]+$/.test(countryValue);
  },

  countryStylingValid() {
    this.country.classList.add("valid");
    this.country.classList.remove("invalid");
  },

  countryStylingInvalid() {
    this.country.classList.add("invalid");
    this.country.classList.remove("valid");
  },

  postalValid() {
    const postalValue = this.postal.value;
    return /^\d{5}$/.test(postalValue);
  },

  postalStylingValid() {
    this.postal.classList.add("valid");
    this.postal.classList.remove("invalid");
  },

  postalStylingInvalid() {
    this.postal.classList.add("invalid");
    this.postal.classList.remove("valid");
  },

  passMatch() {
    const passValue = this.pass.value;
    const confirmValue = this.confirm.value;
    return (
      passValue !== "" && confirmValue !== "" && passValue === confirmValue
    );
  },

  passMatchStylingValid() {
    this.pass.classList.add("valid");
    this.confirm.classList.add("valid");

    this.pass.classList.remove("invalid");
    this.confirm.classList.remove("invalid");
  },

  passMatchStylingInvalid() {
    this.pass.classList.add("invalid");
    this.confirm.classList.add("invalid");

    this.pass.classList.remove("valid");
    this.confirm.classList.remove("valid");
  },
};
