import saludar from "./sumador.js";

describe('Función saludar', () => {
  it('debería devolver "¡Hola!"', () => {
    const resultado = saludar();
    expect(resultado).toBe("¡Hola!");
  });
});