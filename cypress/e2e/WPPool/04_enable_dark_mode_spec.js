/// <reference types="cypress" />

describe('Enable Admin Dashboard Dark Mode', () => {
    const dashboardUrl = 'https://wppool_sqa.com/wp-admin';
  
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
    });
  
    it('Should enable Admin Dashboard Dark Mode from Controls → Admin Panel Dark Mode', () => {
      // Navigate to "Controls" in the admin dashboard
      cy.visit(`${dashboardUrl}/admin.php?page=wp-dark-mode-settings`);
  
      // Verify that we are on the correct page
      cy.url().should('include', 'wp-dark-mode-settings');
  
      // Enable Admin Panel Dark Mode
      cy.get('input[name="wp_dark_mode[backend][enable]"]').check({ force: true });
  
      // Save the changes
      cy.get('input[type="submit"][value="Save Changes"]').click();
  
      // Verify that the settings have been saved successfully
      cy.contains('Settings saved').should('be.visible');
  
      // Verify if the Admin Dashboard Dark Mode is enabled by checking the CSS class or body attribute
      cy.get('body').should('have.class', 'wp-dark-mode-enabled');
    });
  });
  