// El método findIndex() devuelve el índice del primer elemento de un array que cumple con una condición dada. Si no se encuentra ningún elemento, devuelve -1.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando findIndex para obtener el índice del primer número par del array
let indicePrimerPar = numeros.findIndex(numero => numero % 2 === 0);
console.log(indicePrimerPar); // Imprime 4

// Usando findIndex para obtener el índice del primer número mayor que 6
let indiceMayorQueSeis = numeros.findIndex(numero => numero > 6);
console.log(indiceMayorQueSeis); // Imprime 3

// Usando findIndex para buscar un número que no existe en el array
let indiceNumeroNoExistente = numeros.findIndex(numero => numero > 10);
console.log(indiceNumeroNoExistente); // Imprime -1

// Usando findIndex para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let indicePersonaMayorDeVeinticinco = personas.findIndex(persona => persona.edad > 25);
console.log(indicePersonaMayorDeVeinticinco); // Imprime 1

// Resumen: El método findIndex() es útil para encontrar el índice del primer elemento que cumple una condición específica en un array, sin modificar el array original.