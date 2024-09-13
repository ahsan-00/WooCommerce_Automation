/// <reference types="cypress" />

describe('Validate Dark Mode on Admin Dashboard', () => {
  before(() => {
    // Log in to WordPress admin dashboard
    cy.loginToWordPress();

    // Enable Dark Mode if not enabled
    cy.enableDarkMode();
  });

  it('Should validate that the Dark Mode is working on the Admin Dashboard', () => {
    // Reload the dashboard page to ensure dark mode is applied
    cy.reload();

    // Check if the dark mode class is applied to the body element
    cy.get('body').should('have.class', 'wp-dark-mode-enabled');

    // Check if background color is dark (Example: checking if background color is black or dark gray)
    cy.get('body').should('have.css', 'background-color').and((color) => {
      expect(color).to.match(/rgb\(0, 0, 0\)|rgb\(33, 37, 41\)/); // Adjust colors based on actual dark mode colors used
    });

    // Verify other elements have the correct dark mode styles (e.g., dark text color, dark sidebar)
    cy.get('#adminmenu').should('have.css', 'background-color').and((color) => {
      expect(color).to.match(/rgb\(0, 0, 0\)|rgb\(33, 37, 41\)/); // Adjust colors based on actual dark mode colors used
    });

    // Check if the header has the correct dark mode style
    cy.get('#wpadminbar').should('have.css', 'background-color').and((color) => {
      expect(color).to.match(/rgb\(0, 0, 0\)|rgb\(33, 37, 41\)/); // Adjust colors based on actual dark mode colors used
    });
  });
});
