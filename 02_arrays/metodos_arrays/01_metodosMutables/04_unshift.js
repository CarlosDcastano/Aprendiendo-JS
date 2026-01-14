// El método unshift() agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.unshift("uva")); // Imprime: 4
console.log(frutas); // Imprime: ["uva", "manzana", "banana", "naranja"]

// Usando unshift en un array de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.unshift(0)); // Imprime: 6
console.log(numeros); // Imprime: [0, 1, 2, 3, 4, 5]

// Usando unshift en un array vacío
let vacio = [];
console.log(vacio.unshift("elemento")); // Imprime: 1
console.log(vacio); // Imprime: ["elemento"]

// Usando unshift para agregar elementos dentro de una función
function agregarAlPrincipio(array, ...elementos) {
    return array.unshift(...elementos);
}

let letras = ["b", "c"];
console.log(agregarAlPrincipio(letras, "a")); // Imprime: 3
console.log(letras); // Imprime: ["a", "b", "c"]

// Usando unshift en un array de objetos
let objetos = [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }];
console.log(objetos.unshift({ nombre: "objeto0" })); // Imprime: 4
console.log(objetos); // Imprime: [{ nombre: "objeto0" }, { nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }]

// Usando unshift para agregar elementos a un array anidado
let matriz = [[1, 2], [3, 4], [5, 6]];
console.log(matriz.unshift([0, -1])); // Imprime: 4
console.log(matriz); // Imprime: [[0, -1], [1, 2], [3, 4], [5, 6]]

// Resumen: El método unshift() es útil para agregar uno o más elementos al inicio de un array y obtener su nueva longitud.