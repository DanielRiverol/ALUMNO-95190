Middleware = funcion
agrega funcionalidad extra a la aplicacion=> validadores, loguers, conversores, autorizaciones (authentication, authorization)
Middleware siempre se ejecuta antes de la respuesta del servidor
Sintaxis en express
const middleware=(req,res,next)=>{
<!-- logica de programcion -->

<!-- al final de todo el middleware va next() -->
next()
}