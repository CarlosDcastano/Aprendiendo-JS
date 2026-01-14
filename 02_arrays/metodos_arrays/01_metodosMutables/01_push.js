// El método push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
let frutas = ["manzana", "banana"];
console.log(frutas.push("naranja")); // Imprime: 3
console.log(frutas); // Imprime: ["manzana", "banana", "naranja"]

// Usando push para agregar múltiples elementos
let colores = ["rojo", "verde"];
console.log(colores.push("azul", "amarillo")); // Imprime: 4
console.log(colores); // Imprime: ["rojo", "verde", "azul", "amarillo"]

// Usando push con un array vacío
let numeros = [];
console.log(numeros.push(1)); // Imprime: 1
console.log(numeros.push(2, 3, 4)); // Imprime: 4
console.log(numeros); // Imprime: [1, 2, 3, 4]

// Usando push para agregar objetos a un array
let objetos = [];
console.log(objetos.push({ nombre: "objeto1" })); // Imprime: 1
console.log(objetos.push({ nombre: "objeto2" }, { nombre: "objeto3" })); // Imprime: 3
console.log(objetos); 
// Imprime: [{ nombre: "objeto1" }, { nombre: "objeto2" }, { nombre: "objeto3" }]   

// Usando push para agregar elementos a un array dentro de una función
function agregarElemento(array, elemento) {
    return array.push(elemento);
}

let letras = ["a", "b"];
console.log(agregarElemento(letras, "c")); // Imprime: 3
console.log(letras); // Imprime: ["a", "b", "c"]

// Usando push para agregar elementos a un array anidado
let matriz = [[1, 2], [3, 4]];
console.log(matriz[0].push(5)); // Imprime: 3
console.log(matriz); // Imprime: [[1, 2, 5], [3, 4]]

// Usando push para agregar elementos a un array de arrays
let arrayDeArrays = [];
console.log(arrayDeArrays.push([1, 2])); // Imprime: 1
console.log(arrayDeArrays.push([3, 4], [5, 6])); // Imprime: 3
console.log(arrayDeArrays); // Imprime: [[1, 2], [3, 4], [5, 6]]    

// Resumen: El método push() es útil para agregar elementos al final de un array y obtener su nueva longitud.