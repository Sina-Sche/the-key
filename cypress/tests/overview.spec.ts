/* eslint-disable testing-library/prefer-screen-queries */
describe("ContentNodesList Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/overview");
  });

  // it("displays loading overlay while data is loading", () => {
  //   cy.intercept("POST", "**/graphql", (req) => {
  //     req.reply({ fixture: "getContentNodesLoading.json" });
  //   });

  //   cy.getByTestId("loadingOverlay").should("exist");
  //   cy.getByTestId("loadingSpinner").should("exist");
  // });

  // it("displays content nodes after loading", () => {
  //   cy.intercept("POST", "**/graphql", (req) => {
  //     req.reply({ fixture: "getContentNodesSuccess.json" });
  //   });

  //   cy.getByTestId("loadingOverlay").should("not.exist");
  //   cy.getByTestId("contentNode").should("have.length.greaterThan", 0);
  // });

  it("displays error message if there is an error loading data", () => {
    cy.intercept("POST", "**/graphql", (req) => {
      req.reply({ fixture: "getContentNodesError.json", statusCode: 500 });
    });

    cy.getByTestId("loadingOverlay").should("not.exist");
    cy.contains("Sorry, something went wrong").should("exist");
  });

  it("logs out when the logout button is clicked", () => {
    cy.getByTestId("logoutButton").click();
    cy.url().should("include", "/login");
  });
});
