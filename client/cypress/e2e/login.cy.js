describe('Login Flow', () => {
  it('logs in a user successfully', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('user@test.com');
    cy.get('input[name="password"]').type('secret');
    cy.get('button').click();

    cy.url().should('include', '/dashboard');
  });
});
