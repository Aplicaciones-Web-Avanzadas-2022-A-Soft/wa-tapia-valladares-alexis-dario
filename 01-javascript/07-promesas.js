const fs = require('fs');

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise(
        ( //Definicon de la promesa
        resolve, //funcinon return
        reject   //funcion throw
    ) => {
        if(numero%2 === 0){
            resolve(numero);
        }else{
            reject('No es par =(');
        }
    }
    )
    return miPrimeraPromesa
}

promesaEsPar(3)
    .then(//return
        (respuesta)=>{
            console.log('Respuesta : ', respuesta);
        }
    )
    .catch(//throw
        (error)=>{
            console.log('Error : ',error);
        }
    )
    .finally(//finally
        ()=>{
            console.info('FIN');
        }
    )
