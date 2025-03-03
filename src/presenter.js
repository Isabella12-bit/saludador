import { obtenerSaludo } from "./sumador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {
  const nombre = document.querySelector("#nombre").value.trim();
  const genero = document.querySelector("#genero").value;
  const edad = parseInt(document.querySelector("#edad").value.trim()) || null;
  const idioma = document.querySelector("#idioma").value;

  const saludo = obtenerSaludo(nombre, genero, edad, idioma);
  document.querySelector("#resultado").innerHTML = `<p>${saludo}</p>`;
});