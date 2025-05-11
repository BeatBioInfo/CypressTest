let homepage

before(()=>{
    cy.fixture('element').then(sel => {
        homepage = sel.elements.homepage
    })
})

Cypress.Commands.add('clickLoginButton', () => {
    cy.get(homePage.loginButton).click()
})

Cypress.Commands.add('clickSignUpButton', () => {
    cy.get(homepage.signUpButton).click()
})



