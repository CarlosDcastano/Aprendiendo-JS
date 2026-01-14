// El método reverse() invierte el orden de los elementos de un array y devuelve el array invertido.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.reverse()); // Imprime: ["naranja", "banana", "manzana"]
console.log(frutas); // Imprime: ["naranja", "banana", "manzana"]

// Usando reverse en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.reverse()); // Imprime: [5, 4, 3, 2, 1]
console.log(numeros); // Imprime: [5, 4, 3, 2, 1]

// Usando reverse en un array vacío
let vacio = [];
console.log(vacio.reverse()); // Imprime: []
console.log(vacio); // Imprime: []

// Usando reverse para invertir elementos dentro de una función
function invertirArray(array) {
    return array.reverse();
}

let letras = ["a", "b", "c"];
console.log(invertirArray(letras)); // Imprime: ["c", "b", "a"]
console.log(letras); // Imprime: ["c", "b", "a"]

// Usando reverse en un array de objetos
let objetos = [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }];
console.log(objetos.reverse()); // Imprime: [{ nombre: "objeto3" }, { nombre: "objeto2" }, { nombre: "objeto1" }]
console.log(objetos); // Imprime: [{ nombre: "objeto3" }, { nombre: "objeto2" }, { nombre: "objeto1" }]

// Resumen: El método reverse() es útil para invertir el orden de los elementos de un array y obtener el array invertido.