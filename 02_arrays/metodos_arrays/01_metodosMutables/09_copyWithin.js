// El método copyWithin() copia una secuencia de elementos dentro del mismo array y devuelve el array modificado.
let frutas = ["manzana", "banana", "naranja", "uva"];
console.log(frutas.copyWithin(0, 2, 4)); // Imprime: ["naranja", "uva", "naranja", "uva"]
console.log(frutas); // Imprime: ["naranja", "uva", "naranja", "uva"]

// Usando copyWithin en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.copyWithin(0, 2, 4)); // Imprime: [3, 4, 3, 4, 5]
console.log(numeros); // Imprime: [3, 4, 3, 4, 5]

// Usando copyWithin en un array vacío
let vacio = [];
console.log(vacio.copyWithin(0, 1)); // Imprime: []
console.log(vacio); // Imprime: []

// Usando copyWithin para copiar elementos dentro de una función
function copiarElementos(array, destinoInicio, origenInicio) {
    return array.copyWithin(destinoInicio, origenInicio);
}

let letras = ["a", "b", "c"];
console.log(copiarElementos(letras, 0, 1)); // Imprime: ["b", "b", "c"]
console.log(letras); // Imprime: ["b", "b", "c"]

// Usando copyWithin en un array de objetos
let objetos = [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }];
console.log(objetos.copyWithin(0, 1)); // Imprime: [{ nombre: "objeto2" }, { nombre: "objeto3" }, { nombre: "objeto3" }]
console.log(objetos); // Imprime: [{ nombre: "objeto2" }, { nombre: "objeto3" }, { nombre: "objeto3" }]

// Resumen: El método copyWithin() es útil para copiar una secuencia de elementos dentro del mismo array y obtener el array modificado.