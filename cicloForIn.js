//DECLARACION: Un objeto con varias propiedades

const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Medellín"
};

//USO DEL CICLO FOR IN PARA RECORRER LAS PROPIEDADES DE UN OBJETO

//LECTURA: Por cada clave en este objeto
/*por       clave en objeto(Disccinario) */
for (const clave in persona) {
    console.log(clave, persona[clave]); //Haz esto
}