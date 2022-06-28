class checkoutLocators {
  constructor() {
    this.checkoutBtn = "a#cart_checkout1";
  }
}

export default class Checkout {
  constructor() {
    this.locators = new checkoutLocators();
  }

  getCheckoutBtn() {
    return cy.get(this.locators.checkoutBtn);
  }
}
