// El método shift() elimina el primer elemento de un array y lo devuelve.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.shift()); // Imprime: manzana
console.log(frutas); // Imprime: ["banana", "naranja"]

// Usando shift en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.shift()); // Imprime: 1
console.log(numeros); // Imprime: [2, 3, 4, 5]

// Usando shift en un array vacío
let vacio = [];
console.log(vacio.shift()); // Imprime: undefined
console.log(vacio); // Imprime: []

// Usando shift para eliminar elementos dentro de una función
function eliminarPrimerElemento(array) {
    return array.shift();
}

let letras = ["a", "b", "c"];
console.log(eliminarPrimerElemento(letras)); // Imprime: a
console.log(letras); // Imprime: ["b", "c"]

// Usando shift en un array de objetos
let objetos = [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }];
console.log(objetos.shift()); // Imprime: { nombre: "objeto1" }
console.log(objetos); // Imprime: [{ nombre: "objeto2" }, { nombre: "objeto3" }]

// Usando shift para eliminar elementos de un array anidado
let matriz = [[1, 2], [3, 4], [5, 6]];
console.log(matriz.shift()); // Imprime: [1, 2]
console.log(matriz); // Imprime: [[3, 4], [5, 6]]

// Resumen: El método shift() es útil para eliminar el primer elemento de un array y obtener su valor, modificando el array original.