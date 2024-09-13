/// <reference types="cypress" />

describe('Check WP Dark Mode Plugin Status', () => {
    const dashboardUrl = 'https://wppool_sqa.com/wp-admin';
    const pluginName = 'WP Dark Mode';
  
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
    });
  
    it('Should check if the WP Dark Mode plugin is active', () => {
      // Visit the plugins page
      cy.visit(`${dashboardUrl}/plugins.php`);
  
      // Search for "WP Dark Mode" plugin in the plugins list
      cy.contains(pluginName).parents('tr').within(() => {
        // Check if the "Deactivate" link is present, indicating the plugin is active
        cy.get('.deactivate').should('exist');
      });
    });
  
    it('Should display a message if WP Dark Mode plugin is inactive', () => {
      // Visit the plugins page
      cy.visit(`${dashboardUrl}/plugins.php`);
  
      // Search for "WP Dark Mode" plugin in the plugins list
      cy.contains(pluginName).parents('tr').within(() => {
        // Check if the "Activate" link is present, indicating the plugin is inactive
        cy.contains('Activate').should('not.exist');
      });
    });
  });
  