// El método filter() crea un nuevo array con los elementos que cumplen una condición especificada en una función.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando filter para crear un nuevo array con los números pares
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});
console.log(numerosPares); // Imprime [2, 4, 6, 8, 10]

// Usando filter con una función flecha para crear un nuevo array con los números mayores a 5
let mayoresQueCinco = numeros.filter(num => num > 5);
console.log(mayoresQueCinco); // Imprime [6, 7, 8, 9, 10]

// Usando filter para obtener palabras que contienen la letra 'a'
let palabras = ["manzana", "banana", "cereza", "durazno", "uva"];
let palabrasConA = palabras.filter(palabra => palabra.includes('a'));
console.log(palabrasConA); // Imprime ["manzana", "banana", "durazno"]

// Usando filter para obtener objetos con una propiedad específica
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
];
let personasMayoresDeVeinte = personas.filter(persona => persona.edad > 20);
console.log(personasMayoresDeVeinte); // Imprime [{ nombre: "Ana", edad: 25 }, { nombre: "Carlos", edad: 30 }, { nombre: "Pedro", edad: 35 }]   

// Resumen: El método filter() es útil para crear un nuevo array con solo los elementos que cumplen una condición específica, sin modificar el array original.