class headerLocators{
    constructor() {
        //Blue header
        this.mainLogo = 'img[title="Automation Test Store"]';
        //Buttons in blue header
        this.loginOrRegisterBtn = 'ul#customer_menu_top a';
        this.specialBtn = 'a.menu_specials';
        this.accountBtn = 'a.menu_account';
        this.cartBtn = 'a.nobackground';
        this.checkoutBtn = 'a.menu_checkout';
        this.searchInput = 'input#filter_keyword';
    }
}

export default class Header {
    constructor () {
        this.locators = new headerLocators();
    }

    getMainLogo(){
        return cy.get(this.locators.mainLogo);
    }

    getLoginOrRegister(){
        return cy.get(this.locators.loginOrRegisterBtn);
    }

    getSpecialBtn(){
        return cy.get(this.locators.specialBtn).first();
    }

    getAccountBtn(){
        return cy.get(this.locators.accountBtn).first();
    }

    getCartBtn(){
        return cy.get(this.locators.cartBtn).first();
    }

    getCheckoutBtn(){
        return cy.get(this.locators.checkoutBtn).first();
    }

    getSearchInput(){
        return cy.get(this.locators.searchInput).first();
    }
}