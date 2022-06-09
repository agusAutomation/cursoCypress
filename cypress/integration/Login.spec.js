import Header from '../pages/header';
import Login from '../pages/login';
import MyAccount from '../pages/myAccount';
import Data from '../fixtures/usuarios.json';

const url = Cypress.env('baseUrl');

describe('Ejemplo test basico', () => {

    before(() => {
        cy.visit(url);
    });

    it('Mi primer test, hacer click en login', { tags: '@onDevelopment' } , () => {
        const header = new Header();
        const login = new Login();
        const myAccount = new MyAccount();
        let usuario = Data.users[0];

        //Click Btn
        header.getLoginOrRegister().should('have.text', 'Login or register');
        header.getLoginOrRegister().click();

        //Complete User data
        login.getUserInput().type(usuario.name);
        login.getPassInput().type(usuario.pass);
        login.getLoginBtn().click();
        login.getErrorMsg().should('not.exist');

        //Use My Account Page
        myAccount.getTitle().should('contain.text','My Account');
        myAccount.getManageAccountBtn().click();

        login.getErrorMsg().should('not.exist');
    });

    it.only('Testear servicio', { tags: '@onDevelopment' } , () => {
        
        cy.callService('catalogManagement/suggestions/suggestionsByTerm?searchTerm=samsung','buscador');
    });

})