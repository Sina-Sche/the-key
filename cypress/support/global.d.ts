declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByTestId(testId: string): Chainable<Subject>;
  }
}
