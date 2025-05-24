
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command'
import { faker } from '@faker-js/faker';
import './customCommand/homepage'
import './customCommand/signUp'
import './customCommand/commonActions'
import 'cypress-mailosaur'



Cypress.on('uncaught:exception', (err) => {
    console.error('Uncaught exception:', err);   
      return false; 
  });




// beforeEach(()=>{
//   cy.visit('/');
//   cy.clickSignUpButton()
//   cy.assertAnyElementIsVisible('Sign Up')
//   cy.typeInBasicDetailsAndBusinessRegNum()
//   cy.clickNextButton()
// })
// afterEach(()=>{
//   cy.typeInAcceptedPassword()
//   cy.clickAnyButtonWithText('Sign Up')
//   cy.assertOTPLabelIsVisible()
// })
   
