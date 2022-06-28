class contactUsLocators {
  constructor() {
    //Form
    this.firstNameInput = "input#ContactUsFrm_first_name";
    this.emailInput = "input#ContactUsFrm_email";
    this.enquiryTxtArea = "textarea#ContactUsFrm_enquiry";
    this.submitBtn = 'button[title="Submit"]';
    //Main text
    this.title = "h1.heading1";
  }
}

export default class ContactUs {
  constructor() {
    this.locators = new contactUsLocators();
  }

  getFirstNameInput() {
    return cy.get(this.locators.firstNameInput);
  }

  getEmailInput() {
    return cy.get(this.locators.emailInput);
  }

  getEmailInput() {
    return cy.get(this.locators.emailInput);
  }

  getEnquiryTxtArea() {
    return cy.get(this.locators.enquiryTxtArea);
  }

  getSubmitBtn() {
    return cy.get(this.locators.submitBtn);
  }

  getTitle() {
    return cy.get(this.locators.title);
  }
}
