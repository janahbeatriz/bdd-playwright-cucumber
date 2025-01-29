Feature: Example BDD Test with Playwright

  Scenario: Saucedemo Login page
    Given I open the saucelab website
    When I enter my username and password
    And I click the login button
    Then I should be redirected to the inventory page