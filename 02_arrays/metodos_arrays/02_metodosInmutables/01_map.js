// El método map() crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

let numeros = [1, 2, 3, 4, 5];

// Usando map para crear un nuevo array con los números al cuadrado
let cuadrados = numeros.map(function(num) {
    return num * num;
});
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

// Usando map con una función flecha para crear un nuevo array con los números multiplicados por 10
let multiplicadosPorDiez = numeros.map(num => num * 10);
console.log(multiplicadosPorDiez); // Imprime [10, 20, 30, 40, 50]

// Usando map para convertir un array de strings a mayúsculas
let frutas = ["manzana", "banana", "cereza"];
let frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMayusculas); // Imprime ["MANZANA", "BANANA", "CEREZA"]   

// Usando map para crear un nuevo array de objetos a partir de un array de números
let objetosNumeros = numeros.map(num => ({ numero: num, cuadrado: num * num }));
console.log(objetosNumeros); 
// Imprime [{numero: 1, cuadrado: 1}, {numero: 2, cuadrado: 4}, {numero: 3, cuadrado: 9}, {numero: 4, cuadrado: 16}, {numero: 5, cuadrado: 25}] 

// Resumen: El método map() es útil para transformar los elementos de un array sin modificar el array original, creando uno nuevo con los resultados.