// El método includes() determina si un array contiene un elemento específico y devuelve true o false.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando includes para verificar si un número específico está en el array
console.log(numeros.includes(5)); // Imprime true
console.log(numeros.includes(6)); // Imprime false

// Usando includes para buscar un objeto en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

let persona = { nombre: "Carlos", edad: 30 };
console.log(personas.includes(persona)); // Imprime false (porque los objetos no son iguales por referencia)

// Resumen: El método includes() es útil para verificar si un elemento específico está presente en un array, sin modificar el array original.