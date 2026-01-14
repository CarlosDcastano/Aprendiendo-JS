// El método flatMap() es una combinación de map() y flat(). Primero aplica una función a cada elemento del array y luego aplanar el resultado en un nuevo array.

let arrayAnidado = [1, 2, 3];

// Usando flatMap para duplicar cada número y aplanar el resultado
let duplicados = arrayAnidado.flatMap(x => [x, x]);
console.log(duplicados); // Imprime [1, 1, 2, 2, 3, 3]  

// Usando flatMap para convertir cada número en un array de su valor y su cuadrado, y luego aplanar el resultado
let valoresYCuadrados = arrayAnidado.flatMap(x => [x, x * x]);
console.log(valoresYCuadrados); // Imprime [1, 1, 2, 4, 3, 9]

// Usando flatMap para dividir cadenas de texto en palabras y aplanar el resultado
let frases = ["Hola mundo", "JavaScript es genial"];
let palabras = frases.flatMap(frase => frase.split(" "));
console.log(palabras); // Imprime ["Hola", "mundo", "JavaScript", "es", "genial"]

// Usando flatMap con un array que contiene arrays anidados
let arrayConArrays = [1, 2, [3, 4], 5];
let aplanadoYModificado = arrayConArrays.flatMap(x => Array.isArray(x) ? x : [x * 2]);
console.log(aplanadoYModificado); // Imprime [2, 4, 3, 4, 10]

// Resumen: El método flatMap() es útil para transformar y aplanar arrays en una sola operación, sin modificar el array original.