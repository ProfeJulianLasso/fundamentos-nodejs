const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo', error);
    return;
  }
  console.log('Contenido del archivo:', data);
});