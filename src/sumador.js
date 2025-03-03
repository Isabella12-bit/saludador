export function saludoGenerico() {
  return "¡Hola!";
}

export function saludoPersonalizado(nombre) {
  return `¡Hola, ${nombre}!`;
}

export function obtenerSaludoSegunHora(hora) {
  if (hora >= 5 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

export function saludoPersonalizadoConGenero(nombre, genero) {
  let saludoGenero = "";
  
  if (genero === "masculino") {
      saludoGenero = `¡Hola, usuario ${nombre}!`;
  } else if (genero === "femenino") {
      saludoGenero = `¡Hola, usuaria ${nombre}!`;
  } else {
      saludoGenero = `¡Hola, ${nombre}!`;
  }
  
  return saludoGenero;
}

export function saludarPorEdad(nombre, edad) {
  let saludo = "Hola";

  if (edad > 30) {
      saludo = `Hola Sr./Sra. ${nombre}`;
  } else {
      saludo = `Hola ${nombre}`;
  }
  return saludo;
}