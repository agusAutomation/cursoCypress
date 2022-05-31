class loginLocators{
    constructor() {
        //Login form
        this.userInput = 'input#loginFrm_loginname';
        this.passInput = 'input#loginFrm_password';
        this.loginBtn = 'button[title="Login"]';
        //Error
        this.errorMsg = 'div.alert';
    }
}

export default class Login {
    constructor () {
        this.locators = new loginLocators();
    }

    getUserInput(){
        return cy.get(this.locators.userInput);
    }

    getPassInput(){
        return cy.get(this.locators.passInput);
    }

    getLoginBtn(){
        return cy.get(this.locators.loginBtn);
    }

    getErrorMsg(){
        return cy.get(this.locators.errorMsg);
    }
}