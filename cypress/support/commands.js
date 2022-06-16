// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//const { util } = require("chai");
//const { utils } = require("mocha");
import * as utils from "../support/utils";

Cypress.Commands.add('callServiceCat', (endpointName, fileName, schemaJson = false) => {
    cy.request({
        method: 'GET',
        url: 'https://catfact.ninja/'+endpointName
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.writeFile(
            'cypress/fixtures/servicios/cat/'+fileName+'.json',
            response.body
        )
        utils.verifyScheme(schemaJson, response.body, fileName)
    });
});


Cypress.Commands.add('callService', (endpointName, fileName, schemaJson = false) => {
    cy.request({
        method: 'GET',
        url: 'https://tienda-claro-backend-service-jb-tienda-ar.apps.osen02.claro.amx/'+endpointName
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.writeFile(
            'cypress/fixtures/servicios/'+fileName+'.json',
            response.body
        )
        utils.verifyScheme(schemaJson, response.body, fileName)
    });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
