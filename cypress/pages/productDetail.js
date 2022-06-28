class productDetailsLocators {
  constructor() {
    this.addToCartBtn = "a.cart";
  }
}

export default class ProductDetails {
  constructor() {
    this.locators = new productDetailsLocators();
  }

  getAddToCartBtn() {
    return cy.get(this.locators.addToCartBtn);
  }
}
