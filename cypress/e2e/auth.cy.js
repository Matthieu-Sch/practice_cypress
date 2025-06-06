describe("Authentificate features", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Registration failure", () => {
    // On remplit le formulaire de connexion avec des données invalides
    cy.get("input[data-test=username]").type("Test_1");
    cy.get("input[data-test=password]").type("Test_1Mdp");

    // On envoie le formulaire via le bouton Login
    const btnLogin = cy.get("input[data-test=login-button]").contains("Login");
    btnLogin.click();

    // On vérifie que le message d'erreur s'affiche
    const errorMsg =
      "Epic sadface: Username and password do not match any user in this service";
    cy.get("[data-test=error]").should("be.visible").and("contain", errorMsg);
  });

  it("Authentification success", () => {
    cy.login("standard_user", "secret_sauce");
  });
});
