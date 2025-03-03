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