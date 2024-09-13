/// <reference types="cypress" />

describe('WordPress Login Test Suite', () => {
  // Define base URL
  const baseUrl = 'https://wppool_sqa.com/wp-login.php';

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit(baseUrl);
  });

  it('Should log in to WPpool_SQA WordPress site successfully', () => {
    // Fetch credentials from fixtures
    cy.fixture('credentials').then((credentials) => {
      // Input username
      cy.get('#user_login').type(credentials.username);

      // Input password
      cy.get('#user_pass').type(credentials.password);

      // Click login button
      cy.get('#wp-submit').click();

      // Verify successful login by checking the dashboard URL or welcome text
      cy.url().should('include', '/wp-admin');
      cy.contains('Dashboard').should('be.visible');
    });
  });

  it('Should show error message for invalid credentials', () => {
    // Input invalid username
    cy.get('#user_login').type('invalid_user');

    // Input invalid password
    cy.get('#user_pass').type('invalid_pass');

    // Click login button
    cy.get('#wp-submit').click();

    // Verify error message is displayed
    cy.contains('ERROR').should('be.visible');
  });
});
