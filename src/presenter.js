import { saludoGenerico, saludoPersonalizado, obtenerSaludoSegunHora, saludoPersonalizadoConGenero } from "./sumador.js";

const resultadoDiv = document.querySelector("#resultado");
const botonSaludo1 = document.querySelector("#saludo1-btn");
const botonSaludo2 = document.querySelector("#saludo2-btn");
const botonSaludo3 = document.querySelector("#saludo3-btn");
const botonEnviarNombre = document.querySelector("#saludo4-btn");
const botonSaludo5 = document.querySelector("#saludo5-btn");
const botonSaludo4 = document.querySelector("#enviar-nombre-btn");
const nombreContainer = document.querySelector("#nombre-container");
const inputNombre = document.querySelector("#nombre");
const inputGenero = document.querySelector("#genero");
const inputEdad = document.querySelector("#edad");
const edadContainer = document.querySelector("#edad-container");
const botonEnviarEdad = document.querySelector("#enviar-edad-btn");

botonSaludo1.addEventListener("click", () => {
    resultadoDiv.innerHTML = `<p>${saludoGenerico()}</p>`;
});

botonSaludo2.addEventListener("click", () => {
    nombreContainer.style.display = "block";
});

botonSaludo3.addEventListener("click", () => {
  const horaActual = new Date().getHours();
  resultadoDiv.innerHTML = `<p>${obtenerSaludoSegunHora(horaActual)}</p>`;
});

botonEnviarNombre.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    if (nombre) {
        resultadoDiv.innerHTML = `<p>${saludoPersonalizado(nombre)}</p>`;
        nombreContainer.style.display = "none";
        inputNombre.value = "";
    } else {
        resultadoDiv.innerHTML = `<p>Por favor, ingresa tu nombre.</p>`;
    }
});

botonSaludo4.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const genero = inputGenero.value;
  
  if (nombre && genero) {
      resultadoDiv.innerHTML = `<p>${saludoPersonalizadoConGenero(nombre, genero)}</p>`;
      nombreContainer.style.display = "none";
      inputNombre.value = "";
  } else {
      resultadoDiv.innerHTML = `<p>Por favor, ingresa tu nombre y selecciona tu género.</p>`;
  }
});

botonSaludo5.addEventListener("click", () => {
  edadContainer.style.display = "block";
});

botonEnviarEdad.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const edad = parseInt(inputEdad.value.trim());

  if (nombre && !isNaN(edad)) {
      resultadoDiv.innerHTML = `<p>${saludarPorEdad(nombre, edad)}</p>`;
      edadContainer.style.display = "none";
      inputNombre.value = "";
      inputEdad.value = "";
  } else {
      resultadoDiv.innerHTML = `<p>Por favor, ingresa todos los datos correctamente.</p>`;
  }
});