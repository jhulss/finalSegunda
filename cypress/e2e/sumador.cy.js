describe("Postear", () => {
  it("Deberia postear un post", () => {
    cy.visit("/");
    cy.get("#post").type("Holaa como estas");
    cy.get("post-button").click();
    cy.get("#resultado-div").should("contain", "Holaa como estas");
  });
  
  it("Deberia mostrar un mensaje de error cuando el post no tiene contenido", () => {
    cy.visit("/");
    cy.get("#post").type("");
    cy.get("post-button").click();
    cy.get("#resultado-div").should("No es posible postear sin contenido");
  });



});
