/// <reference types="cypress" />
import { onNewArticlePage } from "../support/page_object/newArticlePage.js"
//import { navigateTo } from "../support/page_object/allPages.js"

describe.only('Practice Test Cases',  () => {

    beforeEach ('Login To Application', () => {
        cy.loginToApplication()
    })

    it('Verify Post Articles API', () => {
        cy.visit('/editor')

        const title = 'Sample Article'
        const description = 'This is description of Sample Artcile'
        const body = 'This is the body of Sample Artcile'
        const tags = '#sampleArticle'

        cy.intercept ({
            method: 'POST',
            path: '**/articles',
        }).as('postArticles')

        onNewArticlePage.publish_article(title, description, body, tags)

        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => {
            console.log(xhr)
        })
    })
})