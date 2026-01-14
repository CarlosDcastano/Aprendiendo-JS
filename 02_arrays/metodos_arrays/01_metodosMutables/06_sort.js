// El método sort() ordena los elementos de un array y devuelve el array ordenado.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.sort()); // Imprime: ["banana", "manzana", "naranja"]
console.log(frutas); // Imprime: ["banana", "manzana", "naranja"]

// Usando sort en un array de números
let numeros = [5, 2, 8, 1, 9];
console.log(numeros.sort()); // Imprime: [1, 2, 5, 8, 9]
console.log(numeros); // Imprime: [1, 2, 5, 8, 9]

// Usando sort en un array vacío
let vacio = [];
console.log(vacio.sort()); // Imprime: []
console.log(vacio); // Imprime: []

// Usando sort para ordenar elementos dentro de una función
function ordenarArray(array) {
    return array.sort();
}

let letras = ["c", "a", "b"];
console.log(ordenarArray(letras)); // Imprime: ["a", "b", "c"]
console.log(letras); // Imprime: ["a", "b", "c"]

// Usando sort en un array de objetos
let objetos = [{ nombre: "objeto3" }, { nombre: "objeto1" }, { nombre: "objeto2" }];
console.log(objetos.sort((a, b) => a.nombre.localeCompare(b.nombre))); // Imprime: [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }]
console.log(objetos); // Imprime: [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }]

// Resumen: El método sort() es útil para ordenar los elementos de un array y obtener el array ordenado.