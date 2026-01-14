// El método lastIndexOf() devuelve el índice de la última ocurrencia de un elemento específico en un array. Si no se encuentra, devuelve -1.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando lastIndexOf para obtener el índice del número 5
console.log(numeros.lastIndexOf(5)); // Imprime 2

// Usando lastIndexOf para obtener el índice de un número que no existe en el array
console.log(numeros.lastIndexOf(6)); // Imprime -1

// Usando lastIndexOf para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let persona = { nombre: "Carlos", edad: 30 };
console.log(personas.lastIndexOf(persona)); // Imprime -1 (porque los objetos no son iguales por referencia)

// Resumen: El método lastIndexOf() es útil para encontrar el índice de la última ocurrencia de un elemento específico en un array, sin modificar el array original.