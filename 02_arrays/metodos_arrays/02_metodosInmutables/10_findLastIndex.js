// El método findLastIndex() devuelve el índice del último elemento de un array que cumple con una condición dada. Si no se encuentra ningún elemento, devuelve -1.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando findLastIndex para obtener el índice del último número par del array
let indiceUltimoPar = numeros.findLastIndex(numero => numero % 2 === 0);
console.log(indiceUltimoPar); // Imprime 6

// Usando findLastIndex para obtener el índice del último número mayor que 6
let indiceUltimoMayorQueSeis = numeros.findLastIndex(numero => numero > 6);
console.log(indiceUltimoMayorQueSeis); // Imprime 6

// Usando findLastIndex para buscar un número que no existe en el array
let indiceNumeroNoExistente = numeros.findLastIndex(numero => numero > 10);
console.log(indiceNumeroNoExistente); // Imprime -1

// Usando findLastIndex para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let indicePersonaMayorDeVeinticinco = personas.findLastIndex(persona => persona.edad > 25);
console.log(indicePersonaMayorDeVeinticinco); // Imprime 3

// Resumen: El método findLastIndex() es útil para encontrar el índice del último elemento que cumple una condición específica en un array, sin modificar el array original.