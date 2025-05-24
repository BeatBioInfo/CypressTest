import { fakerEN_NG } from "@faker-js/faker"
let signUp
let homePage

before(()=>{
    cy.fixture('element').then(sel =>{
        signUp = sel.elements.signupPage
    })
})

Cypress.Commands.add('clickNextButton', ()=>{
    cy.get('button').contains('Next').click()
})

Cypress.Commands.add('typeInfullName', () => {
    cy.get(signUp.fullNameField).should('be.visible').fill(fakerEN_NG.person.fullName())
})

Cypress.Commands.add('typeInBusinessName', () => {
    cy.get(signUp.businessNameField).fill(fakerEN_NG.company.buzzPhrase())
})

Cypress.Commands.add('typeInBusinessEmail', () => {
    cy.get(signUp.businessEmailField).type(email.emailAddress)
})

Cypress.Commands.add('typeInBusinessPhoneNumber', () => {
    cy.get(signUp.businessPhoneField).fill(fakerEN_NG.phone.number({style: "international"}))
})

Cypress.Commands.add('typeInBusinessRegNum', () => {
    cy.get(signUp.businessRegField).fill(fakerEN_NG.string.alphanumeric({length: { min: 5, max: 10 }, casing: 'upper'}))
})

Cypress.Commands.add('clickTheSignUpButton', ()=>{
    cy.get('button').contains('Sign Up').click()
})

Cypress.Commands.add('typeInAcceptedPassword', ()=>{
    cy.get(signUp.passwordField).type('Beatrice23@')
})

Cypress.Commands.add('assertOTPLabelIsVisible', () => {
    cy.get(signUp.OTPCodeLabel).contains(signUp.OTPCodeLabelText).should('be.visible')
})
            
       




