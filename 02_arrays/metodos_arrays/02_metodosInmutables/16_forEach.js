// El método forEach() ejecuta una función proporcionada una vez por cada elemento del array.

let numeros = [1, 3, 5, 7, 8, 9, 10];

// Usando forEach para imprimir cada número
numeros.forEach(numero => console.log(numero)); // Imprime cada número del array

// Usando forEach para imprimir cada persona
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];

personas.forEach(persona => console.log(persona.nombre)); // Imprime los nombres de las personas

// Resumen: El método forEach() es útil para ejecutar una función en cada elemento de un array, sin modificar el array original.