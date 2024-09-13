/// <reference types="cypress" />

describe('Check WP Dark Mode Plugin Status', () => {
    const loginUrl = 'https://wppool_sqa.com/wp-login.php';
    const pluginsUrl = 'https://wppool_sqa.com/wp-admin/plugins.php';
    const pluginName = 'WP Dark Mode';
  
    before(() => {
      // Visit the WordPress login page
      cy.visit(loginUrl);
  
      // Fetch credentials from fixtures
      cy.fixture('credentials').then((credentials) => {
        // Input username
        cy.get('#user_login').type(credentials.username);
  
        // Input password
        cy.get('#user_pass').type(credentials.password);
  
        // Click the login button
        cy.get('#wp-submit').click();
  
        // Verify successful login by checking the URL
        cy.url().should('include', '/wp-admin');
      });
    });
  
    it('Should verify that the WP Dark Mode plugin is active', () => {
      // Visit the plugins page
      cy.visit(pluginsUrl);
  
      // Search for the "WP Dark Mode" plugin in the plugins list
      cy.contains(pluginName).parents('tr').within(() => {
        // Check if the plugin row contains the "Deactivate" link, indicating it's active
        cy.get('.deactivate').should('be.visible');
      });
    });
  
    it('Should confirm that WP Dark Mode plugin is not deactivated', () => {
      // Visit the plugins page
      cy.visit(pluginsUrl);
  
      // Search for the "WP Dark Mode" plugin in the plugins list
      cy.contains(pluginName).parents('tr').within(() => {
        // Ensure the "Activate" link is not visible, indicating the plugin is already active
        cy.contains('Activate').should('not.exist');
      });
    });
  });
  