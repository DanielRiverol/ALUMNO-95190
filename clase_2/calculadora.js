// importamos modulos
import { sumar, restar } from "./math.js";

const calculoSuma = async (a,b) => {
  try {
    const resSuma = await sumar(a, b);
    console.log(`Resultado de la suma ${resSuma}`);
  } catch (error) {
    console.log("hubo un error inesperado:", error);
  }
};


calculoSuma(4,0)
calculoSuma(4,34)