/// <reference types="cypress" />

describe('Navigate to WP Dark Mode Settings', () => {
    const dashboardUrl = 'https://wppool_sqa.com/wp-admin';
  
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
    });
  
    it('Should navigate to the WP Dark Mode settings page', () => {
      // Visit the WP Dark Mode settings page
      cy.visit(`${dashboardUrl}/admin.php?page=wp-dark-mode-settings`);
  
      // Verify that we are on the correct page by checking the URL
      cy.url().should('include', 'wp-dark-mode-settings');
  
      // Verify the presence of a specific element on the WP Dark Mode settings page
      cy.get('h1').contains('WP Dark Mode Settings').should('be.visible');
  
      // Verify if the "General Settings" section is visible
      cy.get('.wp-dark-mode-settings-panel').contains('General Settings').should('be.visible');
    });
  });
  