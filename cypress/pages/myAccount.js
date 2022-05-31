class myAccountLocators{
    constructor() {
        this.title = 'span.maintext';
        this.containBtn = 'ul.nav-dash';
        this.editBtn = 'a[data-original-title="Edit account details"]';
        this.changePassBtn = 'a[data-original-title="Change password"]';
        this.manageAccountBtn = 'a[data-original-title="Manage Address Book"]';
        this.wishListBtn = 'a[data-original-title="My wish list"]';
        this.orderHistoryBtn = 'a[data-original-title="Order history"]';
        this.transactionHistoryBtn = 'a[data-original-title="Transaction history"]';
        this.donwloadBtn = 'a[data-original-title="Downloads"]';
        this.notificationBtn = 'a[data-original-title="Notifications"]';
        this.logoffBtn = 'a[data-original-title="Logoff"]';
    }
}

export default class myAccount {
    constructor () {
        this.locators = new myAccountLocators();
    }

    getTitle(){
        return cy.get(this.locators.title);
    }

    getContainBtn(){
        return cy.get(this.locators.containBtn);
    }

    getEditBtn(){
        return this.getContainBtn().find(this.locators.editBtn);
    }

    getChangePassBtn(){
        return this.getContainBtn().find(this.locators.changePassBtn);
    }

    getManageAccountBtn(){
        return this.getContainBtn().find(this.locators.manageAccountBtn);
    }

    getWishListBtn(){
        return this.getContainBtn().find(this.locators.wishListBtn);
    }

    getOrderHistoryBtn(){
        return this.getContainBtn().find(this.locators.orderHistoryBtn);
    }

    getTransactionHistoryBtn(){
        return this.getContainBtn().find(this.locators.transactionHistoryBtn);
    }

    getDonwloadBtn(){
        return this.getContainBtn().find(this.locators.donwloadBtn);
    }

    getNotificationBtn(){
        return this.getContainBtn().find(this.locators.notificationBtn);
    }

    getLogoffBtn(){
        return this.getContainBtn().find(this.locators.logoffBtn);
    }
}