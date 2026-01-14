// El método splice() permite eliminar, reemplazar o agregar elementos en un array.
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.splice(1, 1)); // Imprime: ["banana"]
console.log(frutas); // Imprime: ["manzana", "naranja"]

// Usando splice para eliminar elementos dentro de una función
function eliminarElementos(array, inicio, cantidad) {
    return array.splice(inicio, cantidad);
}

let letras = ["a", "b", "c", "d"];
console.log(eliminarElementos(letras, 1, 2)); // Imprime: ["b", "c"]
console.log(letras); // Imprime: ["a", "d"]

// Usando splice para reemplazar elementos
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.splice(2, 2, 7, 8)); // Imprime: [3, 4]
console.log(numeros); // Imprime: [1, 2, 7, 8, 5]

// Usando splice para agregar elementos
let colores = ["rojo", "verde"];
console.log(colores.splice(1, 0, "amarillo")); // Imprime: []
console.log(colores); // Imprime: ["rojo", "amarillo", "verde"]

// Resumen: El método splice() es útil para eliminar o reemplazar elementos en un array y también para agregar nuevos elementos.