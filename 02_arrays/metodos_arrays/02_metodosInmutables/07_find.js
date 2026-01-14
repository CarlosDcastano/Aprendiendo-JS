// El método find() devuelve el primer elemento de un array que cumple con una condición dada. Si no se encuentra ningún elemento, devuelve undefined.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando find para obtener el primer número par del array
let primerPar = numeros.find(numero => numero % 2 === 0);
console.log(primerPar); // Imprime 8    

// Usando find para obtener el primer número mayor que 6
let mayorQueSeis = numeros.find(numero => numero > 6);
console.log(mayorQueSeis); // Imprime 7

// Usando find para buscar un número que no existe en el array
let numeroNoExistente = numeros.find(numero => numero > 10);
console.log(numeroNoExistente); // Imprime undefined

// Usando find para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let personaMayorDeVeinticinco = personas.find(persona => persona.edad > 25);
console.log(personaMayorDeVeinticinco); // Imprime { nombre: "Carlos", edad: 30 }

// Resumen: El método find() es útil para buscar el primer elemento que cumple una condición específica en un array, sin modificar el array original.