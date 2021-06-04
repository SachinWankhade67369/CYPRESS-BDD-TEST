/// <reference types="cypress" />
import { defineStep } from "cypress-cucumber-preprocessor/steps"

// Note:-  This is common step definition which is shared across all feature file and step definition file
// provided we should create a folder under integration folder with name as "common" only
// then only cypress-cucumber-preprocessor will read the shared common steps 
defineStep('I wait for {int} miliseconds', time => {
    cy.wait(time)
})

defineStep('I see {string} in the title', title =>{
    cy.title().should('include',title)
})

defineStep('I see {string} in the url', url =>{
    cy.url().should('include',url)
})

defineStep('I reload the browser', () =>{
    cy.reload()
})