function saludar(nombre, callback) {
  setTimeout(() => {
    callback( `Hola ${nombre}!`);
  }, 1000);
}

saludar('Juan', mensaje => {
  console.log(mensaje);
});