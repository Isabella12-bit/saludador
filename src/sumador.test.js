import { obtenerSaludo } from "./sumador.js";

describe("Función obtenerSaludo", () => {
    test("Debe devolver un saludo genérico si no se proporciona un nombre", () => {
        expect(obtenerSaludo("", "", null, "español")).toMatch(/Hola|Buenos días|Buenas tardes|Buenas noches/);
    });

    test("Debe incluir el nombre en el saludo", () => {
        expect(obtenerSaludo("Isabella", "", null, "español")).toMatch(/Isabella/);
    });

    test("Debe saludar en inglés", () => {
        expect(obtenerSaludo("Juan", "", null, "inglés")).toMatch(/Hello|Good morning|Good afternoon|Good evening/);
    });

    test("Debe personalizar el saludo según el género", () => {
        expect(obtenerSaludo("Juan", "masculino", null, "español")).toMatch(/usuario Juan/);
        expect(obtenerSaludo("María", "femenino", null, "español")).toMatch(/usuaria María/);
    });

    test("Debe agregar un trato formal si la edad es mayor a 30", () => {
        expect(obtenerSaludo("Carlos", "", 35, "español")).toBe("Hola Sr./Sra. Carlos");
    });

    test("Debe cambiar el saludo según la hora", () => {
        jest.useFakeTimers().setSystemTime(new Date(2024, 1, 1, 10)); // 10 AM
        expect(obtenerSaludo("Juan", "", null, "español")).toMatch(/Buenos días/);
        
        jest.useFakeTimers().setSystemTime(new Date(2024, 1, 1, 15)); // 3 PM
        expect(obtenerSaludo("Juan", "", null, "español")).toMatch(/Buenas tardes/);
        
        jest.useFakeTimers().setSystemTime(new Date(2024, 1, 1, 21)); // 9 PM
        expect(obtenerSaludo("Juan", "", null, "español")).toMatch(/Buenas noches/);
    });
});
