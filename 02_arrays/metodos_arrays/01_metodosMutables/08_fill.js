// El método fill() llena todos los elementos de un array con un valor específico.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.fill("uva")); // Imprime: ["uva", "uva", "uva"]
console.log(frutas); // Imprime: ["uva", "uva", "uva"]

// Usando fill en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.fill(0)); // Imprime: [0, 0, 0, 0, 0]
console.log(numeros); // Imprime: [0, 0, 0, 0, 0]

// Usando fill en un array vacío
let vacio = [];
console.log(vacio.fill("elemento")); // Imprime: ["elemento"]
console.log(vacio); // Imprime: ["elemento"]

// Usando fill para llenar elementos dentro de una función
function llenarArray(array, valor) {
    return array.fill(valor);
}

let letras = ["a", "b", "c"];
console.log(llenarArray(letras, "x")); // Imprime: ["x", "x", "x"]
console.log(letras); // Imprime: ["x", "x", "x"]

// Usando fill en un array de objetos
let objetos = [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }];
console.log(objetos.fill({ nombre: "objetoX" })); // Imprime: [{ nombre: "objetoX" }, { nombre: "objetoX" }, { nombre: "objetoX" }]
console.log(objetos); // Imprime: [{ nombre: "objetoX" }, { nombre: "objetoX" }, { nombre: "objetoX" }]

// Resumen: El método fill() es útil para llenar todos los elementos de un array con un valor específico.