// El método pop() elimina el último elemento de un array y lo devuelve.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.pop()); // Imprime: naranja
console.log(frutas); // Imprime: ["manzana", "banana"]

// Usando pop en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.pop()); // Imprime: 5
console.log(numeros); // Imprime: [1, 2, 3, 4]

// Usando pop en un array vacío
let vacio = [];
console.log(vacio.pop()); // Imprime: undefined
console.log(vacio); // Imprime: []

// Usando pop para eliminar elementos dentro de una función
function eliminarUltimoElemento(array) {
    return array.pop();
}

let letras = ["a", "b", "c"];
console.log(eliminarUltimoElemento(letras)); // Imprime: c
console.log(letras); // Imprime: ["a", "b"]

// Usando pop en un array de objetos
let objetos = [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }];
console.log(objetos.pop()); // Imprime: { nombre: "objeto3" }
console.log(objetos); // Imprime: [{ nombre: "objeto1" }, { nombre: "objeto2" }]

// Usando pop para eliminar elementos de un array anidado
let matriz = [[1, 2], [3, 4], [5, 6]];
console.log(matriz.pop()); // Imprime: [5, 6]
console.log(matriz); // Imprime: [[1, 2], [3, 4]]

// Resumen: El método pop() es útil para eliminar el último elemento de un array y obtener su valor, modificando el array original.