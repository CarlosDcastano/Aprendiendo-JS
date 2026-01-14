// El método values() devuelve un iterador que contiene los valores de cada índice del array.
let numeros = [10, 20, 30];

// Usando values para obtener un iterador de valores
let iterator = numeros.values();
for (let value of iterator) {
    console.log(value);
} // Imprime:
// 10
// 20
// 30

// Usando values para obtener un iterador en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 }
];
let iteratorPersonas = personas.values();
for (let persona of iteratorPersonas) {
    console.log(persona.nombre);
} // Imprime:
// Ana
// Carlos
// María

// Resumen: El método values() es útil para obtener un iterador que proporciona los valores de los índices de un array, sin modificar el array original.