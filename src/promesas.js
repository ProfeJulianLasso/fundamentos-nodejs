function saludar(nombre) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Hola ${nombre}!`);
    }, 1000);
  });
}

saludar('Ana').then(mensaje => {
  console.log(mensaje);
});