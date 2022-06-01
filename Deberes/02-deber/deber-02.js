//TEMA -> Ninio_Elegido => Digimons


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