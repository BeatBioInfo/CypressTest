const { fakerEN_NG } = require("@faker-js/faker");
const { faker } = require("@faker-js/faker");

describe('Attempt to sign up till you get to the OTP page with invalid inputs', () =>
{

  beforeEach(()=>{
  cy.visit('/');
  cy.clickSignUpButton()
  cy.assertAnyElementIsVisible('Sign Up')
  cy.typeInBasicDetails() 
  cy.clickNextButton()

})

afterEach(()=>{
  cy.typeInAcceptedPassword()
  cy.clickAnyButtonWithText('Sign Up')
  cy.retrieveAndInsertOTP()
  cy.assertAnyElementIsVisible('Thank you for signing up!')
    })

    it('Sign up with Twitter as the option for how did you hear about us', () => {
        cy.switchAndCaseForOptionalField('twitter') 
    });

    it('Sign up with Business Reg Num as the option for how did you hear about us', () => {
        cy.switchAndCaseForOptionalField('business registration Number') 
    });
     it('Sign up with Instagram as the option for how did you hear about us', () => {
        cy.switchAndCaseForOptionalField('instagram') 
    });
     it('Sign up with website as the option for how did you hear about us', () => {
        cy.switchAndCaseForOptionalField('website') 
    });

});
            