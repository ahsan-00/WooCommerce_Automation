/// <reference types="cypress" />

describe('Validate Dark Mode on the Front End', () => {
    before(() => {
      // Visit the home page of the website
      cy.visit('https://wppool_sqa.com');
    });
  
    it('Should verify that dark mode is applied on the front end', () => {
      // Check if dark mode CSS class or styling is applied
      // This example assumes that the dark mode is toggled on the front end by adding a specific class to the body
      cy.get('body').should('have.class', 'dark-mode');
  
      // Alternatively, you might need to verify specific styles applied for dark mode
      // Example:
      // cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)'); // Assuming dark mode changes background to black
  
      // Optionally, check if dark mode toggle or switch is available on the front end
      cy.get('[data-testid="dark-mode-toggle"]').should('exist');
  
      // Verify that the page content is adjusted for dark mode (e.g., text color)
      cy.get('p').each(($el) => {
        cy.wrap($el).should('have.css', 'color').and('not.equal', 'rgb(0, 0, 0)'); // Adjust as per dark mode styling
      });
    });
  });
  