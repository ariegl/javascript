const objeto = require("./objetos.js");

describe("Utilizando objetos", () => {
    test("Comprobar si tiene el atributo", () => {
        expect(objeto).toHaveProperty('edad');
    });
})