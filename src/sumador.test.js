import { saludoGenerico, saludoPersonalizado, obtenerSaludoSegunHora, saludoPersonalizadoConGenero, saludarPorEdad, saludarPorIdioma } from "./sumador.js";

describe("Funciones de saludo", () => {
    test("Saludo genérico debe ser correcto", () => {
        expect(saludoGenerico()).toBe("¡Hola!");
    });

    test("Saludo personalizado debe incluir el nombre", () => {
        expect(saludoPersonalizado("Isabella")).toBe("¡Hola, Isabella!");
    });

    test("Saludo personalizado debe funcionar con otro nombre", () => {
        expect(saludoPersonalizado("Carlos")).toBe("¡Hola, Carlos!");
    });

    test("Saludo por hora", () => {
      expect(obtenerSaludoSegunHora("12")).toBe("Buenas tardes");
    });

    test("Saludo por género y nombre", () => {
      expect(saludoPersonalizadoConGenero("Juan", "masculino")).toBe("¡Hola, usuario Juan!");
    });

    test("Saludo por edad y nombre", () => {
      expect(saludarPorEdad("Juan", 33)).toBe("Hola Sr./Sra. Juan");
    });

    test("Saludo por edad y nombre", () => {
      expect(saludarPorIdioma("Juan", "inglés")).toBe("Hello, Juan!");
    });
});