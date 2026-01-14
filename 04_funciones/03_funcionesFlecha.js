// Similar a las expresiones de funciones, pero no lleva la palabra function, sino que directamente se le asigna el valor pasando los parámetros
// Y luego se pone una flecha indicando lo que se ejecutará y lo que se retorna.

// Variable  param     flecha   ejecución y retorno
const suma = (a, b)       =>       a + b;


// Ojo, si tengo más de una línea, necesito llaves y return

const otraSuma = (a, b) => {
    const resultado = a + b;
    return resultado;
};

// Si solo hay un parámetro, puedo obviar los paréntesis
const cuadrado = x => x * x;

// Si no hay parámetros, se usan paréntesis vacíos
const obtenerPi = () => 3.1416;

// Ejemplo con función flecha y setTimeout
setTimeout(() => {
    console.log("Esto se muestra después de 2 segundos");
}, 2000);

// Ejemplo con función flecha y método map
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// Ejemplo con función flecha y método filter
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// Ejemplo con función flecha y método reduce
const sumaTotal = numeros.reduce((acum, n) => acum + n, 0);
console.log(sumaTotal); // 15

// Las funciones flecha no tienen su propio 'this', por lo que heredan el 'this' del contexto donde fueron definidas.

// Esto es útil en callbacks para mantener el contexto correcto.
const objeto = {
    valor: 42,
    metodo: function() {
        setTimeout(() => {
            console.log(this.valor); // 'this' se refiere a 'objeto'
        }, 1000);
    }
};  

objeto.metodo(); // Muestra 42 después de 1 segundo

// Resumen: Las funciones flecha son una forma concisa de escribir funciones en JavaScript, especialmente útiles para callbacks y funciones cortas.