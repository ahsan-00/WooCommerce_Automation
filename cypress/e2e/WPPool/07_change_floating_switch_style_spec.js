/// <reference types="cypress" />

describe('Change Floating Switch Style in WP Dark Mode', () => {
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
      
      // Navigate to Switch Settings in WP Dark Mode Customization
      cy.navigateToSwitchSettings();
    });
  
    it('Should change the Floating Switch Style from the default selection', () => {
      // Find the "Floating Switch Style" dropdown
      cy.get('select[name="wp_dark_mode[switch_style][floating]"]').then(($select) => {
        // Get the default selected value
        const defaultSelected = $select.val();
  
        // Find all options and select a new one that is not the default
        cy.wrap($select).find('option').each(($option) => {
          if ($option.val() !== defaultSelected) {
            cy.wrap($select).select($option.val(), { force: true });
  
            // Break the loop after selecting the first non-default option
            return false;
          }
        });
  
        // Save the changes
        cy.get('input[type="submit"][value="Save Changes"]').click();
  
        // Verify that the changes were saved successfully
        cy.contains('Settings saved').should('be.visible');
  
        // Reload the page and verify that the new style is still selected
        cy.reload();
        cy.get('select[name="wp_dark_mode[switch_style][floating]"]').should('not.have.value', defaultSelected);
      });
    });
  });
  