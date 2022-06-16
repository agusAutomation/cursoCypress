const Ajv = require("ajv");
const ajv = new Ajv({allErrors: true, verbose: true});

/**
 * @method verifyScheme
 * @param {String} schemeJson
 * @param {String} bodyResponse
 * @param {String} name
 * @returns none
 */
function verifyScheme(schemaJson, bodyResponse, name){
    cy.log('Verificar servicio');
    if(schemaJson){
        cy.fixture(schemaJson).then((JsonFile) => {
            const validate = ajv.compile(JsonFile);
            const valid = validate(bodyResponse);
            if (!valid){
                cy.log(JSON.stringify(validate.errors)).then(() => {
                    throw new Error('Schema is different');
                });
            }else{
                cy.log('Servicio '+name+' con estructura correcta');
            }
        });
    }else{
        cy.log("Scheme is not validated for "+name+" service");
    }
}

export { verifyScheme };