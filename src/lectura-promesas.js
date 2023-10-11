const fs = require('fs/promises');

fs.readFile('archivo.txt', 'utf8')
  .then((data) => console.log('Contenido del archivo:', data))
  .catch((error) => console.error('Error al leer el archivo', error));