const fs = require('fs');

function leer(pathLectura) {
    const promesaLectura = new Promise(
        (resolve, reject) => {
            fs.readFile(
                pathLectura,
                'utf-8',
                (errorLectura, contenidoLectura) => {
                    if (errorLectura) {
                        reject(errorLectura);
                    } else {
                        resolve(contenidoLectura);
                    }
                }
            )
        }
    )
    return promesaLectura;
}

function escribir(pathEscritura, nuevoContenido) {
    const promesaLectura = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                pathEscritura,
                nuevoContenido,
                (errorEscritura) => {
                    if (errorEscritura) {
                        //console.error(errorEscritura);
                        reject('Error escribiendo archivo');
                    } else {
                        console.log('Escritura con exito!');
                        resolve(fs.readFileSync(pathEscritura, "utf8"));
                    }
                }
            )
        }
    )
    return promesaLectura;
}


//ASYNC AWAIT
//REGLAS
//1) Estar dentro de una funcion (nombrada o anonima)
//2) AGREGAR la palabra 'async' antes de la declaracion de la funcion
//3) AGREGAR l palabra 'await' antes de la declaracion de una promesa
//4) SIEMPRE utilizar 'try' y 'catch'
console.log("\nASYNC AWAIT\n");
async function ejecutarPromesasAsyncAwait(path1,path2,path3){
    try {
        const primerContenido = await leer(path1);
        const segundoContenido = await  leer(path2);
        await escribir(path3, primerContenido+segundoContenido);
    }catch (e) {
        console.error(e);
    }
}