class checkoutConfirmationLocators {
  constructor() {
    this.confirmOrderBtn = "button#checkout_btn";
  }
}

export default class CheckoutConfirmation {
  constructor() {
    this.locators = new checkoutConfirmationLocators();
  }

  getConfirmOrderBtn() {
    return cy.get(this.locators.confirmOrderBtn);
  }
}
