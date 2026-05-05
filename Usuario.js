// una clase =>class representa a una entidad
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  mostrarInfo(){
    return `Usuario: ${this.nombre} || Correo: ${this.email}`
  }
}


const usuario1= new Usuario("juan","juanito@mail.com")

console.log(usuario1.nombre);
console.log(usuario1.email);
console.log(usuario1.mostrarInfo());
const usuario2= new Usuario("facundo","facundo@mail.com")
console.log(usuario2.nombre);
console.log(usuario2.email);
console.log(usuario2.mostrarInfo());



// const usuario1={
//     nombre:"Juan",
//     email:"juanito@mail.com"
// }