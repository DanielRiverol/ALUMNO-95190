// Conceptos que tenemos que tener claros
// SCOPE / RETURN
const IVA = 1.21
function calcularTotal(base){
    // var es malo
    let mensaje = "Cálculo realizado"
    const total = base * IVA

    console.log(mensaje);

    return total.toFixed(2)
}
let resultado1= calcularTotal(2000)
console.log(resultado1);
let resultado2= calcularTotal(resultado1)
console.log(resultado2);

// console.log(total);


