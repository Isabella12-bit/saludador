export function obtenerSaludo(nombre, genero, edad, idioma) {
  let saludo = "";
  const hora = new Date().getHours();
  if (hora >= 5 && hora < 12) {
      saludo = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
  } else {
      saludo = "Buenas noches";
  }
  if (nombre) {
      if (genero === "masculino") {
          saludo += `, usuario ${nombre}`;
      } else if (genero === "femenino") {
          saludo += `, usuaria ${nombre}`;
      } else {
          saludo += `, ${nombre}`;
      }
  }
  if (edad && edad > 30) {
      saludo = `Hola Sr./Sra. ${nombre}`;
  }
  if (idioma === "inglés") {
      saludo = saludo.replace("Buenos días", "Good morning").replace("Buenas tardes", "Good afternoon").replace("Buenas noches", "Good evening");
      saludo = saludo.replace("Hola", "Hello");
  }

  return saludo;
}