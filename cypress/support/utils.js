import Ajv from "ajv"
const Ajv = require("ajv")

const ajv = new Ajv({allErrors: true});


function verifyScheme(schemaJson, bodyResponse, name){
    if(schemaJson){
        cy.fixture(schemaJson).then((JsonFile) => {
            const validate = ajv.compile(JsonFile)
            const valid = validate(bodyResponse)
            if (!valid) console.log(validate.errors);
        })
    }
}