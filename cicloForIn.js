const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Medellín"
};

//LECTURA: Por cada clave en este objeto
/*por       clave en objeto(Disccinario) */
for (const clave in persona) {
    console.log(clave, persona[clave]); //Haz esto
}