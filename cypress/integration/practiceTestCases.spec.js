/// <reference types="cypress" />

describe ('Practice Test Cases',  () => {

    beforeEach ('Login To Application', () => {
        cy.loginToApplication()
    })

    it ('Verify Post Artciles API', () => {

        cy.intercept ({
            method: 'POST',
            path: '**/articles',
        }).as('postArticles')

        cy.contains('New Article').click()
        cy.get('#title').clear().type('Sample Article')
        cy.get('#description').clear().type('This is description of Sample Artcile')
        cy.get('#body').clear().type('This is the body of Sample Artcile')
        cy.get('#tags').clear().type('#sampleArticle')
        cy.get('submit')
    })

})