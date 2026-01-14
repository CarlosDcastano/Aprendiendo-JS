// El método reduce() aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

let numeros = [1, 2, 3, 4, 5];

// Usando reduce para sumar todos los números del array

let suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0); // 0 es el valor inicial del acumulador

console.log(suma); // Imprime 15    

// Usando reduce con una función flecha para multiplicar todos los números del array
let producto = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1); // 1 es el valor inicial del acumulador

console.log(producto); // Imprime 120

// Usando reduce para encontrar el valor máximo en un array
let maximo = numeros.reduce((acumulador, valorActual) => {
    return valorActual > acumulador ? valorActual : acumulador;
}, numeros[0]); // El primer elemento como valor inicial    
console.log(maximo); // Imprime 5

// Usando reduce para contar la cantidad de ocurrencias de cada elemento en un array
let frutas = ["manzana", "banana", "manzana", "naranja", "banana", "manzana"];
let conteoFrutas = frutas.reduce((acumulador, fruta) => {
    if (acumulador[fruta]) {
        acumulador[fruta]++;
    } else {
        acumulador[fruta] = 1;
    }
    return acumulador;
}, {});

console.log(conteoFrutas); // Imprime { manzana: 3, banana: 2, naranja: 1 } 

// Resumen: El método reduce() es útil para combinar todos los elementos de un array en un solo valor, ya sea una suma, un producto, un objeto de conteo, etc., sin modificar el array original.

