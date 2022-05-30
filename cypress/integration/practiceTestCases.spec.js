/// <reference types="cypress" />

describe ('Practice Test Cases',  () => {

    beforeEach ('Login To Application', () => {
        cy.loginToApplication()
    })

    it ('Verify Login To Application', () => {
        cy.log('Logged in')
    })

})