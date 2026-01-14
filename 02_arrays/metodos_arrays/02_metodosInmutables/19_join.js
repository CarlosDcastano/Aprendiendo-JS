// El método join() une todos los elementos de un array en una cadena, separados por un carácter especificado.
let colores = ["rojo", "verde", "azul"];
console.log(colores.join(", ")); // Imprime: rojo, verde, azul
console.log(colores.join(" - ")); // Imprime: rojo - verde - azul

// Usando join en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.join("")); // Imprime: 12345
console.log(numeros.join(" | ")); // Imprime: 1 | 2 | 3 | 4 | 5

// Resumen: El método join() es útil para convertir un array en una cadena, permitiendo especificar un separador entre los elementos.