class confirmationLocators {
  constructor() {
    this.confirmationTxt = "h1.heading1";
  }
}

export default class Confirmation {
  constructor() {
    this.locators = new confirmationLocators();
  }

  getConfirmationTxt() {
    return cy.get(this.locators.confirmationTxt);
  }
}
