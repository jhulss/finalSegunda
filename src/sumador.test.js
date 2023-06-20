import Verificardor from "./sumador";

describe("Verificar", () => {
  it("Deberia devolver un carater", () => {
    const verifi = new Verificardor ();
    expect(verifi.verificar(",")).toEqual(",");
  });
});
