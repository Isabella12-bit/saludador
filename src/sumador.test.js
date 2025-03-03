import { saludoGenerico, saludoPersonalizado, obtenerSaludoSegunHora } from "./sumador.js";

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
});