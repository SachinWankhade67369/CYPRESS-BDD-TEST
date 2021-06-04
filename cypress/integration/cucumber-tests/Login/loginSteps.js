/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../Login/loginPage"

Given('I open login page', () => {
    LoginPage.visit()
})

// When('I submit login', () => {

   
//     LoginPage.fillUsername('username')
//     LoginPage.fillPassword('password')
//     LoginPage.submit()


// })

When('I fill username as {string}',username => {

    LoginPage.fillUsername(username)
})

When('I fill password as {string}', password=> {
    LoginPage.fillPassword(password)
})
When('I click on submit login',() => {
    LoginPage.submit()
})

Then('I should see homepage', () => {

    // can put in homePage.js file by using POM
    cy.get('#account_summary_tab').should('be.visible')
    cy.title().should('include','Zero - Account Summary')
    cy.url().should('include','account-summary.html')
    
})

Then('I should see error message as {string}', error_message =>{
    LoginPage.showErrorMessage(error_message)
})
