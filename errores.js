// manejo de errores try/catch

function dividir(a, b) {
  try {
    if (b == 0) {
      throw new Error("No es posible la división por cero");
    }
    return a / b;
  } catch (error) {
    return `Error detectado: ${error.message}`;
  }
}

// let division1= dividir(12,0)
// console.log(division1);

function registrarUsuario(datos) {
  try {
    if (!datos.nombre) throw new Error("Falta el nombre");

    // simular el registro
    console.log("Usuario guardado");
  } catch (error) {
    console.error(`Fallo en el registro: ${error.message}`);
  } finally {
    console.log("Proceso de registro finalizado");//cerrar la conexion a la base de datos
  }
}


registrarUsuario({nombre:"juanito" ,email:"juanitoarcoiris@mail.com"})
registrarUsuario({email:"juanitoarcoiris@mail.com"})