Feature: Login to Application

    As a invalid user
    I cannot login to Application
    As a valid user
    I want to log in to the Application

  Scenario: Invalid Login
    Given  I open login page
      And I wait for 2000 miliseconds
   And I see "Zero - Log in" in the title
    When  I fill username as "username1"
    And I fill password as "password1" 
    And I click on submit login
    Then I should see error message as "Login and/or password are wrong" 

  # @focus - add @focus tag to run the perticular scenario and rest of all get skipped
  Scenario: Valid Login
    Given  I open login page
    # When I submit login
    When  I fill username as "username"
    And I fill password as "password" 
    And I click on submit login
    Then I should see homepage   

   

