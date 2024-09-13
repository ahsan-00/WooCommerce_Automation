/// <reference types="cypress" />

describe('Change Floating Switch Position in WP Dark Mode', () => {
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
      
      // Navigate to Switch Settings in WP Dark Mode Customization
      cy.navigateToSwitchSettings();
    });
  
    it('Should change the Floating Switch Position to Left', () => {
      // Ensure we are in the "Switch Settings" section
      cy.contains('Switch Settings').should('be.visible');
  
      // Select the "Floating Switch Position" dropdown
      cy.get('select[name="wp_dark_mode[switch_position][floating]"]').then(($select) => {
        // Select the "Left" option from the dropdown
        cy.wrap($select).select('left', { force: true });
  
        // Verify that the "Left" option is selected
        cy.get('select[name="wp_dark_mode[switch_position][floating]"]').should('have.value', 'left');
      });
  
      // Save the changes
      cy.get('input[type="submit"][value="Save Changes"]').click();
  
      // Verify that the changes were saved successfully
      cy.contains('Settings saved').should('be.visible');
  
      // Reload the page to ensure the changes persist
      cy.reload();
  
      // Verify that the "Floating Switch Position" is still set to "Left"
      cy.get('select[name="wp_dark_mode[switch_position][floating]"]').should('have.value', 'left');
    });
  });
  