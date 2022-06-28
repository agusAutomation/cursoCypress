/// <reference types="Cypress" />

import Header from "../../pages/header";

const url = Cypress.env("baseUrl");

describe("Menu", () => {
  before(() => {
    cy.visit(url);
  });

  it("Check each item of menu", { tags: "@regression" }, () => {
    const header = new Header();
    const buttons = [
      "Home",
      "Apparel & accessories",
      "Makeup",
      "Skincare",
      "Fragrance",
      "Men",
      "Hair Care",
      "Books",
    ];

    for (let i = 0; i < buttons.length; i++) {
      header.getNavSubButtons(i + 1).should("include.text", buttons[i]);
    }
  });

  it("Obtain TEXT of each item of menu", { tags: "@regression" }, () => {
    const header = new Header();
    let menuOp;

    for (let i = 0; i < 8; i++) {
      header.getNavSubButtons(i + 1).then((element) => {
        menuOp = element.text();
        cy.log(menuOp);
      });
    }
  });

  it.only("MouseOver each element", { tags: "@onDevelopment" }, () => {
    const header = new Header();
    let subOp;

    for (let i = 1; i <= 8; i++) {
      cy.log("**Element " + i + "**");
      header.getNavSubButtons(i).realHover();

      if (i == 1) {
        header.getSubMenuContainer().should("be.visible");
        header.getSubMenuOptions().then((element) => {
          subOp = element.text();
          cy.log(subOp);
          cy.log("Longitud: " + element.length);
        });
      } else {
        header.getSubMenuContainer2().should("be.visible");
        header.getSubMenuOptions2().then((element) => {
          subOp = element.text();
          cy.log(subOp);
          cy.log("Longitud: " + element.length);
        });
      }
    }
  });
});
