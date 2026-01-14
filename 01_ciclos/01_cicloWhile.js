//Similar a for, pero se usa más para cuando no sabemos hasta cuándo queremos que se repita la acción.

let topeIntentos = 1;


while(topeIntentos <=5){
    console.log("Hola, este es su intento", topeIntentos);
    topeIntentos++;
}

//Mientras el usuario no ingrese un nombre, no se le permitirá avanzar, solo hasta que escriba un nombre.

//Aquí, como nombre solo está inicializada, pero no definida, su estado es undefined, por ende es falsy, por lo cual, se entra al ciclo
// Y mientras el usuario no ingrese nada, seguirá siendo falsy.

let nombre;

while(!nombre){
    nombre = prompt("IDebe ingresar un nombre");
}



