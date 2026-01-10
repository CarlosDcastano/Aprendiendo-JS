const tope = 5;
const topei = 10;
const topej = 10;

// Básico
for(let i = 1; i<=tope; i++){
    console.log(i);
}

// Anidado
for(let i=1; i<=topei; i++){
    console.log("Tabla del", i);
    for(let j=1; j<=topej; j++){
        console.log(i, "X", j, ":", i*j);
    }
    console.log("");
}

