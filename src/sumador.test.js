import Verificardor from "./sumador";

describe("Verificar", () => {
  it("Deberia devolver un carater", () => {
    const verifi = new Verificardor ();
    expect(verifi.verific(",")).toEqual(",");
  });

  it("Deberia devolver correcto ya que la cadena esta equilibrada", () => {
    const verifi = new Verificardor ();
    expect(verifi.verificar("[]")).toEqual("correcto");
  });

});
