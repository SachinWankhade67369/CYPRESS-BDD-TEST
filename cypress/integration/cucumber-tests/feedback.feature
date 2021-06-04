Feature: Send Feedback

    As a customer 
    I can send my feedback via form

  Scenario Outline: Submit feedback form
   Given I open feedback page
   When I fill feedback form as "<name>","<email>","<subject>","<comment>"
   And I click on send button
   Then I see "/sendFeedback.html" in the url

   Examples: 
   | name | email        | subject             | comment                            |
   | joy  | joy@email.com| Interesting Subject | Cypress is awesome automation tool |