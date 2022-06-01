/// <reference types="cypress" />

export class allPages {

    newArticlePage(){
        cy.contains('New Article').click()
    }

}

export const navigateTo = new allPages()