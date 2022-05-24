//Destructuracion de objetos
const alexis ={
    nombre: "Alexis"
};

const carolina = {
    nombre: "Carolina",
    apellido: "Tapia"
};

const alexisCarolina = { //Creando una nueva referencia
    ...carolina,    //1 El orden es importante para propiedades que se repiten
    ...alexis       //2 El ultimo reemplaza a los anteriores
}
console.log('alexisCarolina',alexisCarolina);

//Destructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDOs = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno, //El orden importa
    ...arregloDOs
]
console.log('superArreglo',superArreglo);
console.log(...superArreglo);