import user from "..";

describe("Probar la clase usuarios", () => {
    test("Probar si la clase usuarios tiene ciertos atributos", () => {
        expect(user).toHaveProperty("email");
        expect(user).toHaveProperty("firstName");
        expect(user).toHaveProperty("lastName");
        expect(user.getEmail()).toBeDefined();
    })
})

