console.log("Clase 2");
// obj
const user = {
  id: "8khjajhg3jh2jhg3",
  nombre: "juanito",
  email: "juanito@mail.com",
  password: "Password123",
  activo: true,
};
// Tradicional
// console.log(user.nombre);
// console.log(user["nombre"]);

// // destructuring
// const { nombre, id, password } = user;
// console.log(nombre);
// console.log(id);
// console.log(password);

// METODOS DE LOS ARRAYS
const numeros = [1, 3, 4, 2, 6, 7, -8, 0];

const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
// console.log(sumaTotal);

// console.log(numeros.includes(-8));

let nombre1 = null;
let cantidad = 0;
let edad = undefined;
let apellido = null;
// const objeto1 = { nombre: "Maria", edad: 40 };
const objeto1 = null;
const array1 = [];
const sumar = (a, b) => a + b;
// OP LOGICOS 
// and (&&) | or (||) | nullish (??) | acceder condicionalmente a un valor(?)
// console.log("OP OR");
// console.log(nombre1 || "No existe nombre");
// console.log(cantidad || "cantidad es 0");
// console.log(edad || "no hay edad");
console.log("OP NULLISH");
console.log(cantidad ?? "cantidad es 0")
// condicion ? true : false
// (?)
// console.log(objeto1.peso || "no valor peso" )
console.log(objeto1?.nombre || "NO hay valor definido");






