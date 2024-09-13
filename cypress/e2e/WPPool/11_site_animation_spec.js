/// <reference types="cypress" />

describe('Enable Page-Transition Animation and Change Animation Effect in WP Dark Mode', () => {
    before(() => {
      // Log in to WordPress admin dashboard
      cy.loginToWordPress();
      
      // Navigate to Site Animation settings in WP Dark Mode
      cy.navigateToSiteAnimationSettings();
    });
  
    it('Should enable Page-Transition Animation and change the Animation Effect', () => {
      // Ensure we are in the "Site Animation" section
      cy.contains('Site Animation').should('be.visible');
  
      // Enable the Page-Transition Animation
      cy.get('input[name="wp_dark_mode[animation][page_transition]"]').check({ force: true });
  
      // Select a new Animation Effect from the dropdown (assuming "Fade" is the new selection)
      cy.get('select[name="wp_dark_mode[animation][effect]"]').select('fade', { force: true });
  
      // Verify that the new Animation Effect is selected
      cy.get('select[name="wp_dark_mode[animation][effect]"]').should('have.value', 'fade');
  
      // Save the changes
      cy.get('input[type="submit"][value="Save Changes"]').click();
  
      // Verify that the changes were saved successfully
      cy.contains('Settings saved').should('be.visible');
  
      // Reload the page to ensure the changes persist
      cy.reload();
  
      // Verify that the Page-Transition Animation is still enabled
      cy.get('input[name="wp_dark_mode[animation][page_transition]"]').should('be.checked');
  
      // Verify that the Animation Effect is still set to "Fade"
      cy.get('select[name="wp_dark_mode[animation][effect]"]').should('have.value', 'fade');
    });
  });
  