const fs = require('fs');

fs.readFile('./mensaje.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
  } else {
    console.log("Contenido del archivo:", data);
  }
});

fs.writeFile('./mensaje.txt', 'Hola Maximiliano desde Node.js', (err) => {
  if (err) {
    console.error("Error al escribir en el archivo:", err);
  } else {
    console.log("Archivo sobreescrito correctamente.");
  }
});

