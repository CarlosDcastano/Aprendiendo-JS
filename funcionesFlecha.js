// Similar a las expresiones de funciones, pero no lleva la palabra function, sino que directamente se le asigna el valor pasando los parámetros
// Y luego se pone una flecha indicando lo que se ejecutará y lo que se retorna.

// Variable  param     flecha   ejecución y retorno
const suma = (a, b)       =>       a + b;


// Ojo, si tengo más de una línea, necesito llaves y return

const otraSuma = (a, b) => {
    const resultado = a + b;
    return resultado;
};