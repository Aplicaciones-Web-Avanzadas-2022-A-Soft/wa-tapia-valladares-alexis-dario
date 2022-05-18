const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARAMETROS

//FIND
//enviamos una expresion -> TRUTY FALSY
//devuelve el primero que cumpla esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Cristian"; //Expresion = = =
        }
    );
console.log('respuestaFinal',respuestaFind); //Si no encnuetra devulve undefined

//FINDINDEX
//enviamos una expresion -> TRUTY FALSY
//devuelve el primero que cumpla esa condicion
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual, arregloCompleto){
            return valorActual.nombre === "Wendy";
        }
    );
console.log('respuestaIndex', respuestaIndex); //indice //no encuentra -> -1

//FOREACH
// iterar el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual,indiceActual, arregloCompleto){
            console.log('valorActual',valorActual);
        }
    );
console.log('respuestaForEach',respuestaForEach); //undefined

//MAP (modificar o  mutar el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respustaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto)=>{
            const nuevoElemento ={
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota +1,
                casado: false
            };
            return nuevoElemento;
        }
    );
console.log('respuetaMap',respustaMap);
console.log('arreglo',arreglo);

//FILTER (filtrar el arreglo)
//enviamos EXPRESION TRUTY FALSY
//devuelve los elementos que cumplen esa condicion
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota >=15;
        }
    );
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo',arreglo);

//SOME -> expresion
//devuelve boolenao
//Hay alguna nota menor a nueve?
//OR
const respuestaSome = arreglo
    .some(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota < 6;
        }
    );
console.log('respuestaSome',respuestaSome);
console.log('arreglo',arreglo);

//EVERY -> expresion
//devuelve booleano
//Todas las notas son mayores a 14?
//AND
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery',respuestaEvery);
console.log('arreglo',arreglo);

//REDUCE          izq -> der
//REDUCE RIGHT    der -> izq
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arreglo){
            return (valorAcumulado + valorActual.nota);
        },
        0 //Acumulador
    );

console.log('respuestaReduce',respuestaReduce);
console.log('Promedio ->', respuestaReduce/arreglo.length);
