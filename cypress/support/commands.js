Cypress.Commands.add('loginToWordPress', () => {
    const loginUrl = 'https://wppool_sqa.com/wp-login.php';
  
    // Visit the login page
    cy.visit(loginUrl);
  
    // Fetch credentials from fixtures
    cy.fixture('credentials').then((credentials) => {
      // Input username
      cy.get('#user_login').type(credentials.username);
  
      // Input password
      cy.get('#user_pass').type(credentials.password);
  
      // Click login button
      cy.get('#wp-submit').click();
  
      // Verify successful login
      cy.url().should('include', '/wp-admin');
    });
  });

  Cypress.Commands.add('navigateToSwitchSettings', () => {
    const customizationUrl = 'https://wppool_sqa.com/wp-admin/admin.php?page=wp-dark-mode-settings&tab=customize';
  
    // Visit the Customization tab in WP Dark Mode settings
    cy.visit(customizationUrl);
  
    // Verify that we are on the correct page by checking the URL
    cy.url().should('include', 'wp-dark-mode-settings&tab=customize');
  
    // Verify that the "Switch Settings" section is visible
    cy.contains('Switch Settings').should('be.visible');
  });
  