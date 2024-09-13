/// <reference types="cypress" />

describe('Disable Keyboard Shortcut in WP Dark Mode', () => {
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
      
      // Navigate to Accessibility Settings in WP Dark Mode
      cy.navigateToAccessibilitySettings();
    });
  
    it('Should disable the Keyboard Shortcut from Accessibility Settings', () => {
      // Ensure we are in the "Accessibility Settings" section
      cy.contains('Accessibility Settings').should('be.visible');
  
      // Find the checkbox or toggle to disable Keyboard Shortcuts
      cy.get('input[name="wp_dark_mode[accessibility][keyboard_shortcut]"]').uncheck({ force: true });
  
      // Save the changes
      cy.get('input[type="submit"][value="Save Changes"]').click();
  
      // Verify that the changes were saved successfully
      cy.contains('Settings saved').should('be.visible');
  
      // Reload the page to ensure the changes persist
      cy.reload();
  
      // Verify that the Keyboard Shortcuts are still disabled
      cy.get('input[name="wp_dark_mode[accessibility][keyboard_shortcut]"]').should('not.be.checked');
    });
  });
  