describe("Postear", () => {
  it("Deberia postear un post", () => {
    cy.visit("/");
    cy.get("#post").type("Holaa como estas");
    cy.get("post-button").click();
    cy.get("#resultado-div").should("contain", "Holaa como estas");
  });

  it("Deberia mostrar un mensje de error al no tener contenido", () => {
    cy.visit("/");
    cy.get("#post").type("");
    cy.get("post-button").click();
    cy.get("#resultado-div").should("contain", "No es posible postear sin contenido");
  });


});
