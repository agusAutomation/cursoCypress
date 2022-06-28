class productsLocators {
  constructor() {
    //Login form
    this.productName = 'a[class="prdocutname"]';
  }
}

export default class Products {
  constructor() {
    this.locators = new productsLocators();
  }

  getProductName(num) {
    return cy.get(
      "div.grid>div:nth-of-type(" + num + ") " + this.locators.productName
    );
  }
}
