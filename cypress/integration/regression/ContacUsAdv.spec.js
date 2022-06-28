import Footer from "../../pages/footer";
import ContactUs from "../../pages/contactUs";
import data from "../../../cypress/fixtures/contactUs.json";

const url = Cypress.env("baseUrl");

for (let i = 0; i < data.length; i++) {
  describe("Ejemplo test basico", () => {
    before(() => {
      cy.visit(url);
    });

    it(
      "Complete Contact Us Form: " + data[i].firstName,
      { tags: "@regression" },
      () => {
        const footer = new Footer();
        const contactUs = new ContactUs();

        let user = data[i];

        //From home, go to Contact Us Page
        footer.getGreyButtons(5).should("have.text", "Contact Us").click();
        //Complete and send form
        contactUs.getFirstNameInput().type(user.firstName);
        contactUs.getEmailInput().type(user.email);
        contactUs.getEnquiryTxtArea().type(user.message);
        contactUs.getSubmitBtn().click();
        //Request sent
        cy.url().should("include", "contact/success");
      }
    );
  });
}
