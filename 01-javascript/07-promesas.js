const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimeraPromesa = new Promise(
        ( //Definicon de la promesa
            resolve, //funcinon return
            reject   //funcion throw
        ) => {
            if (numero % 2 === 0) {
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimeraPromesa
}

function promesasElevarAlCuadrado(numero){
    const miPrimeraPromesa = new Promise(
        (resolve) => {
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);
        }
    )
    return miPrimeraPromesa;
}

promesaEsPar(4)
    .then(//return
        (numeroPar) => {
            return promesasElevarAlCuadrado(numeroPar); //OTRA PROMESA
        }
    )
    .then( //return
        (numeroParElevadoAlCuadrado) => {
            console.log('numeroParElevadoAlCuadrado: ',numeroParElevadoAlCuadrado );
        }
    )
    .catch(//throw
        (error) => {
            console.log('Error : ', error);
        }
    )






