
describe('Ejemplo test de servicio', () => {

    it('Call service /fact', { tags: '@regression' } , () => {   
        let maxLength = 60;   
        cy.callServiceCat('fact?max_length='+maxLength,'fact', '../schemas/cat_fact.json');
    });

})