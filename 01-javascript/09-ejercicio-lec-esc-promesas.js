const fs = require('fs');

/*
Hacer una funcon que me acepte como parametro una vaiable
con el path del primer archivo, el path del segundo archivo
y el path del nuevo archivo.
Vamos a crear dos funciones, una promesaLectura y una promesaEscritura
promesaLectura va a aceptar path de lectura
promesaEscritura va a aceptar path de escritura
- Promesa de lectura
- Promesa de escritura
*/
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

function ejercicio(pathLectura1, pathLectura2, pathEscritura) {
    let datos='';
    leer(pathLectura1)
        .then(
            (contenido1) => {
                datos += contenido1;
                return leer(pathLectura2);
            }
        )
        .then(
            (contenido2) => {
                datos += contenido2;
                return escribir(pathEscritura, datos);
            }
        )
        .then(
            (respuesta) => {
                console.log(respuesta);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
}

ejercicio('06-ejemplo.txt', '01-variables.js', '09-ejercicio.txt');
