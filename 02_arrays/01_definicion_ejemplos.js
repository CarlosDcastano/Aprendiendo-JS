//Un array en una lista ordenada de elementos, que pueden ser de cualquier tipo de dato.

//Definición de un array:
let miArray = [1, 2, 3, 4, 5];
let otroArray = ["Hola", "Mundo", "JavaScript"];
let arrayMixto = [1, "Hola", true, null];   

//Acceder a los elementos de un array:
console.log(miArray[0]); // Imprime 1
console.log(otroArray[1]); // Imprime "Mundo"
console.log(arrayMixto[2]); // Imprime true

//Modificar elementos de un array:
miArray[2] = 10;
console.log(miArray); // Imprime [1, 2, 10, 4, 5]

