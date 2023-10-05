const academias = [
{
    nombre: "IT Academy",
    capacidad: 3,
    full: true,
    profesores: [ "Pedro", "Juan", "Synthia"],
},

{
    nombre: "Escuela de Rock",
    capacidad: 5,
    full: true,
    profesores: [ "Paty", "Lola", "Seth"],
},

{
    nombre: "Flamenco",
    capacidad: 10,
    full: true,
    profesores: [ "Rosa", "Pas", "Coi"],
},

];

// capacidad mayor de 5
const mayorDe5 = academias.filter(element => element.capacidad > 5);
console.log(mayorDe5);


// media de capacidad
// como sacar la media: sumar todas capacidad, y dividir x length

let total = 0;

academias.forEach(element => {
    total += element.capacidad;
});

const mediaCapacidad = total / academias.length;

console.log(mediaCapacidad);

// nuevo array con todos los nombres de profe
let profes = [];

academias.forEach(element => {
   profes.push(...element.profesores);
   
   profes = [...profes, ...element.profesores]
});

console.log(profes);








