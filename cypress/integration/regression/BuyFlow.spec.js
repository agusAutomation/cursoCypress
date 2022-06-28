import Header from "../../pages/header";
import Login from "../../pages/login";
import Data from "../../fixtures/usuarios.json";
import Products from "../../pages/products";
import ProductDetails from "../../pages/productDetail";
import Checkout from "../../pages/checkoutPage";
import CheckoutConfirmation from "../../pages/checkoutConfirmation";
import Confirmation from "../../pages/confirmation";

const url = Cypress.env("baseUrl");

describe("Ejemplo test basico", () => {
  before(() => {
    cy.visit(url);
  });

  it("Flujo de Compra", { tags: "@onDevelopment" }, () => {
    const header = new Header();
    const login = new Login();
    const product = new Products();
    const checkout = new Checkout();
    const productDetails = new ProductDetails();
    const checkoutConfirmation = new CheckoutConfirmation();
    const confirmation = new Confirmation();
    let usuario = Data.users[0];

    //Click Btn
    header.getLoginOrRegister().should("have.text", "Login or register");
    header.getLoginOrRegister().click();

    //Complete User data
    login.getUserInput().type(usuario.name);
    login.getPassInput().type(usuario.pass);
    login.getLoginBtn().click();

    //Select Category to buy
    header.getNavSubButtons(2).realHover();
    header.getSubMenuOptions2().last().click();

    //Select Product in Product Page
    product.getProductName(4).click();

    //Product Details Page
    productDetails.getAddToCartBtn().click();

    //Checkout Page
    checkout.getCheckoutBtn().click();

    //Checkout Confirmation Page
    checkoutConfirmation.getConfirmOrderBtn().click();

    //Confirmation
    confirmation
      .getConfirmationTxt()
      .should("contains.text", "Your Order Has Been Processed!");
  });
});
