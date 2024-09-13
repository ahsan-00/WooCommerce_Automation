
# Cypress Automation Test Suite for WPpool_SQA

# Overview
This repository contains an automation test suite built with Cypress to validate various functionalities of the "WP Dark Mode" plugin on the "WPpool_SQA" WordPress site. The test suite covers scenarios related to enabling and configuring dark mode settings both in the WordPress admin panel and on the front end.

# Requirements
Node.js: Ensure Node.js is installed on your machine. You can download it from nodejs.org.
Cypress: This test suite uses Cypress for end-to-end testing.
WordPress Admin Access: Valid credentials are required to access the WordPress admin dashboard.
Setup
Follow these steps to set up and run the test suite:

1. Clone the Repository
git clone https://github.com/your-username/your-repository.git
cd your-repository

2. Install Dependencies
Run the following command to install Cypress and other dependencies:
npm install

3. Configure Cypress
3.1 Add WordPress Credentials
Create a credentials.json file in the cypress/fixtures folder with your WordPress admin credentials:

{
    "username": "wppool_sqa",
    "password": "@hsaN12345"
}

3.2 Update Base URL (Optional)
If you need to update the base URL for your WordPress site, you can set it in the cypress.config.js file:

module.exports = {
  e2e: {
    baseUrl: 'https://wppool_sqa.com',
    // other options
  },
};

# Running the Test Suite
To run the test suite, use the following command:

npx cypress run
This command will execute all tests in headless mode. If you prefer to run tests in interactive mode using the Cypress Test Runner, use:

npx cypress open

In the Cypress Test Runner, you can select individual test files to run and view results in real time.

# Test Cases
The test suite includes the following test cases:

1. Log in to WordPress Admin: Validates login functionality.
2. Check WP Dark Mode Plugin Activation: Verifies if the WP Dark Mode plugin is active.
3. Enable Admin Dashboard Dark Mode: Configures dark mode in the admin panel.
4. Validate Dark Mode on Admin Dashboard: Checks if dark mode is applied to the admin dashboard.
5. Navigate to WP Dark Mode Settings: Tests navigation to the WP Dark Mode settings page.
6. Change Floating Switch Style: Modifies the floating switch style.
7. Switch Customization: Sets custom switch size and scale.
8. Change Floating Switch Position: Updates the position of the floating switch.
9. Disable Keyboard Shortcut: Disables the keyboard shortcut from accessibility settings.
10. Enable Page-Transition Animation: Activates page-transition animation and changes animation effect.
11. Validate Dark Mode on the Front End: Ensures dark mode is applied on the front end of the website.

# Contribution
Feel free to contribute to this project by submitting issues or pull requests. Ensure your code follows the existing style and includes relevant tests.

# Contact
For any questions or support, please reach out to ahsanhabib.sqa@gmail.com
