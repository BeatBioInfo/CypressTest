import { fakerEN_NG } from "@faker-js/faker"
import { faker } from "@faker-js/faker/locale/en_NG"
let signup
let homepage
let email
let serverID = 'jhrt9ie3'
let emailDomain = '@jhrt9ie3.mailosaur.net'
let emailAddress

before(()=>{
    const checker = new Date().getTime()
    const emailSuffix = checker.toString().substring(6,13)
    const emailPrefix = `test${emailSuffix}`
    emailAddress = `${emailPrefix}${emailDomain}`
    const userDetails = {
        emailAddress: emailAddress
    }
    cy.writeFile('cypress/fixtures/creds.json', JSON.stringify(userDetails, null, 2))
  
    cy.fixture('element').then(sel =>{
        signup = sel.elements.signupPage
        homepage = sel.elements.homepage
    })
    cy.fixture('creds').then((cred) => {
        email = cred
    })
})

Cypress.Commands.add('typeInAnyValue', (field, text) => {
    cy.get(field).type(text)
})

Cypress.Commands.add('clickAnyElementWithText', (element, text) => {
    cy.get(element).contains(text).click()
})

Cypress.Commands.add('clickAnyButtonWithText', (text) => {
    cy.get('button').contains(text).click()
})

Cypress.Commands.add('selectAnOptionForHowYouHeardAboutUsDropDown', (text) => {
    cy.get(signup.howYouHearAboutUsField).click()
    cy.get(signup.HowYouHeardDropDownElements).within(()=>{
         cy.contains(text).click()
    })
   
})
Cypress.Commands.add('assertAnyElementIsVisible', (text) => {
    cy.contains(text).should('be.visible').and('exist')
})

Cypress.Commands.add('typeInBasicDetailsAndBusinessRegNum', ()=>{
    
    const inputs = [
            fakerEN_NG.person.fullName(),
            fakerEN_NG.company.buzzPhrase(),
            email.emailAddress,
            fakerEN_NG.phone.number({style: "international"}),
            fakerEN_NG.string.alphanumeric({length: { min: 5, max: 10 }, casing: 'upper'})
        ]
        cy.get('input').each(($el, index) => {
            cy.wrap($el).fill(inputs[index])
        })
})

Cypress.Commands.add('selectAndFillAnyOptionalFieldsOnTheSignUPForm', (option)=> {
    if(option === 'business registration Number'){
        cy.typeInAnyValue(signup.businessRegField, fakerEN_NG.string.alphanumeric({length: { min: 5, max: 10 }, casing: 'upper'}))
        cy.clickAnyButtonWithText('Next')

    }else if
    (option === 'website'){
        cy.clickAnyButtonWithText('Next')
        cy.get(signup.websiteField).fill(fakerEN_NG.internet.url({appendSlash: true}))
    }
    else if
    (option === 'instagram'){
        cy.clickAnyButtonWithText('Next')
        cy.typeInAnyValue(signup.instagramField, 
            fakerEN_NG.commerce.productAdjective())
    }
    else if(option === 'twitter'){
        cy.clickAnyButtonWithText('Next')
        cy.typeInAnyValue(signup.twitterField
            , fakerEN_NG.string.alphanumeric({length: { min: 5, max: 10 }, casing: 'upper'}))
        }else{
            throw new Error("Option not found")
        }
})

Cypress.Commands.add('switchAndCaseForOptionalField', (option)=> {
    switch(option){
        case 'business registration Number':
            cy.typeInAnyValue(signup.businessRegField, fakerEN_NG.string.alphanumeric({ length: { min: 5, max: 10 }, casing: 'upper' }));
            cy.clickAnyButtonWithText('Next')

            break; 

        case 'website':
            cy.clickAnyButtonWithText('Next')
            cy.get(signup.websiteField).fill(fakerEN_NG.internet.url({ appendSlash: true }));
            break;

        case 'instagram':
            cy.clickAnyButtonWithText('Next')
            cy.typeInAnyValue(signup.instagramField, fakerEN_NG.commerce.productAdjective());
            break;

        case 'twitter':
            cy.clickAnyButtonWithText('Next')
            cy.typeInAnyValue(signup.twitterField, fakerEN_NG.string.alphanumeric({ length: { min: 5, max: 10 }, casing: 'upper' }));
            break;

        default:
            throw new Error("Option not found")
    }
    
})

Cypress.Commands.add('typeInBasicDetails', () =>
{
    cy.typeInfullName()
    cy.typeInBusinessName()
    cy.typeInBusinessEmail()
    cy.typeInBusinessPhoneNumber()
})

Cypress.Commands.add('retrieveAndInsertOTP', () => {
    cy.mailosaurGetMessage(serverID, {sentTo: emailAddress})
        .then((email) => {
            const firstCode = email.html.codes[0] 
            const otp = firstCode.value
            cy.log(otp)
            cy.get('input').each(($el, index) => {
                cy.wrap($el).type(otp[index])
            })
        })
})





