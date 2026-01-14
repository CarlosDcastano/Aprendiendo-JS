// El método flat() crea un nuevo array con todos los elementos de sub-arrays concatenados recursivamente hasta una profundidad especificada.

let arrayAnidado = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];

// Usando flat() para aplanar el array a una profundidad de 1
let aplanadoUnaProfundidad = arrayAnidado.flat(1);
console.log(aplanadoUnaProfundidad); // Imprime [1, 2, 3, 4, [5, 6], 7, 8, 9]

// Usando flat() para aplanar el array a una profundidad de 2
let aplanadoDosProfundidades = arrayAnidado.flat(2);
console.log(aplanadoDosProfundidades); // Imprime [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Usando flat() sin especificar profundidad (por defecto es 1)
let aplanadoPorDefecto = arrayAnidado.flat();
console.log(aplanadoPorDefecto); // Imprime [1, 2, 3, 4, [5, 6], 7, 8, 9]

// Usando flat() con un array más profundo
let arrayMuyAnidado = [1, [2, [3, [4, [5]]]]];
let aplanadoProfundamente = arrayMuyAnidado.flat(Infinity);
console.log(aplanadoProfundamente); // Imprime [1, 2, 3, 4, 5]  

// Resumen: El método flat() es útil para aplanar arrays anidados sin modificar el array original, permitiendo especificar la profundidad de aplanamiento.