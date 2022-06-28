class footerLocators {
  constructor() {
    this.greyBtns = "ul.info_links_footer li";
  }
}

export default class Footer {
  constructor() {
    this.locators = new footerLocators();
  }

  getGreyButtons(num) {
    return cy.get(this.locators.greyBtns + ":nth-of-type(" + num + ")");
  }
}
