/// <reference types="cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import FeedbackPage from "./feedbackPage"

Given('I open feedback page', () => {
    FeedbackPage.visit()
})

When('I fill feedback form as {string},{string},{string},{string}', (Name,Email,Subject,Comment) =>{

    FeedbackPage.fillFeedbackForm(Name,Email,Subject,Comment)
})

When('I click on send button',()=>{
    FeedbackPage.clickOnSendFeedback()
})


