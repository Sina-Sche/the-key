describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the login form", () => {
    cy.get("[data-testid=welcome]").should("exist");
    cy.get("[data-testid=emailInput]").should("exist");
    cy.get("[data-testid=passwordInput]").should("exist");
    cy.get("[data-testid=loginButton]").should("exist");
  });

  it("should display an error for invalid login", () => {
    cy.get("[data-testid=emailInput]").type("invalid@example.com");
    cy.get("[data-testid=passwordInput]").type("invalidPassword");
    cy.get("[data-testid=loginButton]").click();

    cy.get("[data-testid=loginError]").should("be.visible");
    cy.get("[data-testid=loginError]").should(
      "contain",
      "Incorrect Email or password."
    );
  });

  it("should login successfully with valid credentials", () => {
    const validEmail = Cypress.env("USER_EMAIL");
    const validPassword = Cypress.env("USER_PASSWORD");

    cy.get("[data-testid=emailInput]").type(validEmail);
    cy.get("[data-testid=passwordInput]").type(validPassword);
    cy.get("[data-testid=loginButton]").click();

    cy.url().should("include", "/overview");
  });
});
