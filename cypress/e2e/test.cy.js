describe('SignUp Form', () => {
  it('updates state when inputs are changed', () => {
    cy.visit('');
    cy.get('input[placeholder="First Name"]')
      .type('John')
      .should('have.value', 'John');
    cy.get('input[placeholder="Last Name"]')
      .type('Doe')
      .should('have.value', 'Doe');
    cy.get('input[placeholder="Email"]')
      .type('john.doe@example.com')
      .should('have.value', 'john.doe@example.com');
    cy.get('input[placeholder="Password"]')
      .type('secret123')
      .should('have.value', 'secret123');
  });
  it('displays an error message if email is not valid', () => {
    cy.visit('');
    cy.get('input[placeholder="Email"]')
      .type('invalid')
      .should('have.value', 'invalid');
    cy.get('.error-message').should('be.visible');
  });
  it('submits form correctly', () => {
    cy.visit('');
    cy.get('input[placeholder="First Name"]')
      .type('John')
      .should('have.value', 'John');
    cy.get('input[placeholder="Last Name"]')
      .type('Doe')
      .should('have.value', 'Doe');
    cy.get('input[placeholder="Email"]')
      .type('john.doe@example.com')
      .should('have.value', 'john.doe@example.com');
    cy.get('input[placeholder="Password"]')
      .type('secret123')
      .should('have.value', 'secret123');
    cy.spy(console, 'log');
    cy.get('button[type="submit"]').click();
    cy.get('@console.log').should('be.calledWith', 'John Doe john.doe@example.com secret123');
  });
  it('meets accessibility standards', () => {
    cy.visit('');
    cy.injectAxe();
    cy.checkA11y();
  });
});
