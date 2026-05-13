// JS tiene un solo hilo de ejecución
// setTimeout(()=>{
//     console.log('Proceso lento');

// },2000)
// console.log("Inicio del sistema");
// console.log("Siguiente operacion");

//Promesas
let envio = true;
const promesa = new Promise((resolve, reject) => {
  // cuerpo de la promesa
  setTimeout(() => {
    if (envio) {
      resolve("Email enviado correctamente");
    } else {
      reject("Error al enviar el email");
    }
  }, 3000);
});

console.log(promesa);
promesa
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log("Conexion a la db cerrada"));
