import saludar from "./sumador.js"; 

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const mensaje = saludar();

  div.innerHTML = "<p>" + mensaje + "</p>";
});
