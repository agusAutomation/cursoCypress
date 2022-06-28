import Footer from "../../pages/footer";
import ContactUs from "../../pages/contactUs";

const url = Cypress.env("baseUrl");

describe("Ejemplo test basico", () => {
  before(() => {
    cy.visit(url);
  });

  it("Complete Contact Us Form", { tags: "@onDevelopment" }, () => {
    const footer = new Footer();
    const contactUs = new ContactUs();

    //From home, go to Contact Us Page
    footer.getGreyButtons(5).should("have.text", "Contact Us").click();
    //Complete and send form
    contactUs.getFirstNameInput().type("Anastasia");
    contactUs.getEmailInput().type("anastasia@darwoft.com");
    contactUs.getEnquiryTxtArea().type("This is an example!!!");
    contactUs.getSubmitBtn().click();
    //Request sent
    cy.url().should("include", "contact/success");
  });
});
