// El método findLast() devuelve el último elemento de un array que cumple con una condición dada. Si no se encuentra ningún elemento, devuelve undefined.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando findLast para obtener el último número par del array
let ultimoPar = numeros.findLast(numero => numero % 2 === 0);
console.log(ultimoPar); // Imprime 10

// Usando findLast para obtener el último número mayor que 6
let ultimoMayorQueSeis = numeros.findLast(numero => numero > 6);
console.log(ultimoMayorQueSeis); // Imprime 10

// Usando findLast para buscar un número que no existe en el array
let numeroNoExistente = numeros.findLast(numero => numero > 10);
console.log(numeroNoExistente); // Imprime undefined

// Usando findLast para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let personaMayorDeVeinticinco = personas.findLast(persona => persona.edad > 25);
console.log(personaMayorDeVeinticinco); // Imprime { nombre: "Pedro", edad: 35 }

// Resumen: El método findLast() es útil para buscar el último elemento que cumple una condición específica en un array, sin modificar el array original.