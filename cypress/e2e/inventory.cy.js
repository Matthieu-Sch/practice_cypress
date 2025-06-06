describe("Test inventory page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("Should find 6 items", () => {
    cy.get("[data-test=inventory-item]")
      .should("have.length", 6)
      .then((items) => cy.log(`Contenu item 3 : ${items[2].innerText}`));
  });
});
