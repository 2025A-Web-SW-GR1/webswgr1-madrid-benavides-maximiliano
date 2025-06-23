  
  
  
  
  function verificarPar(numero) {
    return new Promise((resolve, reject) => {
      if (typeof numero !== 'number') {
        reject("No es un número");
      } else if (numero % 2 === 0) {
        resolve("Es par");
      } else {
        reject("No es par");
      }
    });
  }
  
  verificarPar(6)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  
  const fs = require('fs');
  
  function leerArchivo(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) reject("Error al leer el archivo");
        else resolve(data);
      });
    });
  }
  
  leerArchivo('./mensaje.txt')
    .then(contenido => console.log("Texto leído:", contenido))
    .catch(error => console.error("Error:", error));
  
  
  
  
  async function procesarArchivo() {
  try {
    const texto = await leerArchivo('./mensaje.txt');
    console.log("Lectura con async/await:", texto);
  } catch (error) {
    console.error("Error con async/await:", error);
  }
}

procesarArchivo();
