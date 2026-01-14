// El método entries() devuelve un iterador que contiene pares clave-valor para cada índice del array.
let numeros = [10, 20, 30];

// Usando entries para obtener un iterador de pares clave-valor
let iterator = numeros.entries();
for (let [index, value] of iterator) {
    console.log(`Índice: ${index}, Valor: ${value}`);
} // Imprime:
// Índice: 0, Valor: 10
// Índice: 1, Valor: 20
// Índice: 2, Valor: 30

// Usando entries para obtener un iterador en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 }
];
let iteratorPersonas = personas.entries();
for (let [index, persona] of iteratorPersonas) {
    console.log(`Índice: ${index}, Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}

// Resumen: El método entries() es útil para obtener un iterador que proporciona pares clave-valor de los índices y valores de un array, sin modificar el array original.