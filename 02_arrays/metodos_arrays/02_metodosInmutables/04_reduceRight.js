// El método reduceRight() aplica una función a un acumulador y a cada elemento del array (de derecha a izquierda) para reducirlo a un solo valor.

let numeros = [1, 2, 3, 4, 5];
// Usando reduceRight para concatenar los números en una cadena de texto desde el final hacia el principio
let concatenacion = numeros.reduceRight(function(acumulador, valorActual) {
    return acumulador + valorActual.toString();
}, ""); // "" es el valor inicial del acumulador

console.log(concatenacion); // Imprime "54321"  

// Usando reduceRight con una función flecha para restar los números del array desde el final hacia el principio
let resta = numeros.reduceRight((acumulador, valorActual) => acumulador - valorActual, 0); // 0 es el valor inicial del acumulador
console.log(resta); // Imprime -15 (0 - 5 - 4 - 3 - 2 - 1)

// Usando reduceRight para encontrar el valor mínimo en un array desde el final hacia el principio
let minimo = numeros.reduceRight((acumulador, valorActual) => {
    return valorActual < acumulador ? valorActual : acumulador;
}, numeros[numeros.length - 1]); // El último elemento como valor inicial    
console.log(minimo); // Imprime 1

// Usando reduceRight para crear un array invertido
let arrayInvertido = numeros.reduceRight((acumulador, valorActual) => {
    acumulador.push(valorActual);
    return acumulador;
}, []);
console.log(arrayInvertido); // Imprime [5, 4, 3, 2, 1]

// Resumen: El método reduceRight() es útil para combinar todos los elementos de un array en un solo valor, procesándolos desde el final hacia el principio, sin modificar el array original.