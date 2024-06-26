describe('BrowserStack Live Session', () => {
  it('should log in, start a live session, and stop the session', () => {
    // Visit the login page
    cy.visit('https://www.browserstack.com/users/sign_in');

    // Log in with your credentials
    cy.get('#user_email_login').type('lisban34@gmail.com'); // Replace with your email
    cy.get('#user_password').type('Lisban@2002'); // Replace with your password
    cy.get('#user_submit').click();

    // Wait for the page to load and then click on the specified option
    cy.get('#platform-list-react > div > div.platform-list__os-section > div > div.accordion.sc-fujyUd.jfBEPB.accordion--windows.accordion--open > div.accordion__header.os-section__list.os-section__list--windows-icon > div').click();

    // Click on the next element
    cy.get('#platform-list-react > div > div.platform-list__items-section > div > div.browser-list__content > div:nth-child(1) > div.dnd__droppable.browser-version-list > div:nth-child(2) > div > div.browser-version-list__element.browser-version-list__element--ql-adoption-enabled').click();

    // Wait for the session to start
    cy.wait(10000); // Adjust the wait time as needed to ensure the session starts

    // Click on the stop session button
    cy.get('#stop-session > div > label').click();

    // Optionally, you can add assertions to verify that the session has stopped
    cy.contains('Session stopped').should('exist');
  });
});
