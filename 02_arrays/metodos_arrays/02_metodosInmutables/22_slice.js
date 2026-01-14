// El método slice() devuelve una copia superficial de una porción del array, desde el índice inicial hasta el índice final (sin incluirlo).
let colores = ["rojo", "verde", "azul", "amarillo"];
console.log(colores.slice(1, 3)); // Imprime: ["verde", "azul"]

// Usando slice en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.slice(2, 4)); // Imprime: [3, 4]

// Usando slice con índices negativos
console.log(numeros.slice(-3, -1)); // Imprime: [3, 4]

// Usando slice sin el segundo parámetro para obtener desde un índice hasta el final
console.log(colores.slice(2)); // Imprime: ["azul", "amarillo"]

// Usando slice para copiar todo el array
let copiaColores = colores.slice();
console.log(copiaColores); // Imprime: ["rojo", "verde", "azul", "amarillo"]

// Usando slice en un array de objetos
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 28 }
];
console.log(personas.slice(1, 3)); // Imprime: [{ nombre: "Carlos", edad: 30 }, { nombre: "María", edad: 28 }]

// Resumen: El método slice() es útil para obtener una porción del array sin modificar el original.