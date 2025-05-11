const { fakerEN_NG } = require("@faker-js/faker");
const { faker } = require("@faker-js/faker");

describe('Test all the options of how users heard about us', () =>
    {
        beforeEach(()=>{
        cy.visit('/');
        cy.clickSignUpButton()
        cy.assertAnyElementIsVisible('Sign Up')
        cy.typeInBasicDetailsAndBusinessRegNum()
        cy.clickNextButton()
        })
        afterEach(()=>{
        cy.typeInAcceptedPassword()
        cy.clickAnyButtonWithText('Sign Up')
        cy.assertOTPLabelIsVisible()
        })
         
        
    it('Sign up with Twitter as the option for how did you hear about us', () => {
        cy.selectAnOptionForHowYouHeardAboutUsDropDown('Twitter')
            
    });
     
    it('Sign up with Instagram as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Instagram')     
    });

    it('Sign up with Facebook as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Facebook')     
    });
      it('Sign up with Webinar/Seminar as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Webinar/Seminar')     
    });
      it('Sign up with Google Search as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Google Search')     
    });
      it('Sign up with Friends & Family as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Friends & Family')     
    });
      it('Sign up with Mima Sales Agent as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Mima Sales Agent')     
    });
      it('Sign up with Others as the option for how did you hear about us', () => {  
            cy.selectAnOptionForHowYouHeardAboutUsDropDown('Others')     
    });

});
            