/// <reference types="cypress" />

describe('Set Custom Switch Size in WP Dark Mode', () => {
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
      
      // Navigate to Switch Settings in WP Dark Mode Customization
      cy.navigateToSwitchSettings();
    });
  
    it('Should select Custom Switch size and scale it to 220', () => {
      // Ensure we are in the "Switch Customization" section
      cy.contains('Switch Customization').should('be.visible');
  
      // Select the "Custom Switch Size" option
      cy.get('select[name="wp_dark_mode[switch_customization][size]"]').select('custom', { force: true });
  
      // Verify that the custom size option is selected
      cy.get('select[name="wp_dark_mode[switch_customization][size]"]').should('have.value', 'custom');
  
      // Scale the custom size to 220
      cy.get('input[name="wp_dark_mode[switch_customization][scale]"]').clear().type('220');
  
      // Save the changes
      cy.get('input[type="submit"][value="Save Changes"]').click();
  
      // Verify that the changes were saved successfully
      cy.contains('Settings saved').should('be.visible');
  
      // Reload the page to ensure the changes persist
      cy.reload();
  
      // Verify that the "Custom Switch Size" is still selected and set to 220
      cy.get('select[name="wp_dark_mode[switch_customization][size]"]').should('have.value', 'custom');
      cy.get('input[name="wp_dark_mode[switch_customization][scale]"]').should('have.value', '220');
    });
  });
  