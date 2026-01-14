// El método some() determina si al menos un elemento de un array cumple con una condición dada. Devuelve true si al menos uno cumple, false en caso contrario.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando some para verificar si al menos un número es par
console.log(numeros.some(numero => numero % 2 === 0)); // Imprime true

// Usando some para verificar si al menos un número es mayor que 10
console.log(numeros.some(numero => numero > 10)); // Imprime false

// Usando some para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

console.log(personas.some(persona => persona.edad > 30)); // Imprime true

// Resumen: El método some() es útil para verificar si al menos un elemento de un array cumple con una condición específica, sin modificar el array original.