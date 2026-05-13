export const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) return reject("operacion innecesaria");

    const resultado = a + b;
    resolve(resultado);
  });
};
export const restar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) return reject("operacion innecesaria");

    const resultado = a - b;
    resolve(resultado);
  });
};


