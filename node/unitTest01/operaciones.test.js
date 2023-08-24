const {suma,resta, multiplicacion, division} = require("./operaciones.js");

describe("Operaciones matematicas", () => {

    test("suma de dos numeros", () => {
        const resultado = suma(1,2);

        expect(resultado).toBe(3);
    });

    test("Resta de dos numeros", () => {
        expect(resta(3,2)).toBe(1);
    });

    test("Multiplicacion de dos numeros", () =>{
        expect(multiplicacion(3,2)).toBe(6);
    });

    test("Division de dos numeros", () => {
        expect(division(6,2)).toBe(3);
    });

});