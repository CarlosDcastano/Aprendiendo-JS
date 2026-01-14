// El método every() determina si todos los elementos de un array cumplen con una condición dada. Devuelve true si todos cumplen, false en caso contrario.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando every para verificar si todos los números son pares
console.log(numeros.every(numero => numero % 2 === 0)); // Imprime false

// Usando every para verificar si todos los números son mayores que 0
console.log(numeros.every(numero => numero > 0)); // Imprime true

// Usando every para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

console.log(personas.every(persona => persona.edad > 20)); // Imprime true

// Resumen: El método every() es útil para verificar si todos los elementos de un array cumplen con una condición específica, sin modificar el array original.