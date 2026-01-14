// El método concat() devuelve una nueva matriz que contiene los elementos de la matriz original y los elementos de las matrices proporcionadas.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
console.log(array1.concat(array2, array3)); // Imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando concat con arrays de diferentes tipos
let letras = ["a", "b", "c"];
let numeros = [1, 2, 3];
console.log(letras.concat(numeros)); // Imprime: ['a', 'b', 'c', 1, 2, 3]

// Usando concat con valores individuales
let arrayBase = [true, false];
console.log(arrayBase.concat("hola", 42, null)); // Imprime: [true, false, 'hola', 42, null]

// Resumen: El método concat() es útil para combinar múltiples arrays o agregar elementos a un array sin modificar el array original.