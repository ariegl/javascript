const arreglo = require("./arreglos.js");

describe("Arreglos",() => {
    test("Validar si contiene un elemento", () => {
        expect(arreglo).toContain(8);
    });

    test("Validar tamaño arreglo", () => {
        expect(arreglo).toHaveLength(5);
    });
})