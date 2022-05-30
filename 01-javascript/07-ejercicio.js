const fs = require('fs'); //file system
function ejercicio(pathArchivo1, pathArchivo2, nuevoArchivo) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                pathArchivo1,
                'utf-8',
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if (errorLecturaPrimerArchivo) {
                        //console.error(errorLecturaPrimerArchivo);
                        reject('Error leyendo el primer archivo');
                    } else {
                        fs.readFile(
                            pathArchivo2,
                            'utf-8',
                            (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                                if (errorLecturaSegundoArchivo) {
                                    //console.error(errorLecturaSegundoArchivo);
                                    reject('Error leyendo el segundo archivo');
                                } else {
                                    //console.log(contenidoPrimerArchivo,contenidoSegundoArchivo);
                                    const archivosUnidos = contenidoPrimerArchivo + contenidoSegundoArchivo;
                                    fs.writeFile(
                                        nuevoArchivo,
                                        archivosUnidos,
                                        (errorEscritura) => {
                                            if (errorEscritura) {
                                                //console.error(errorEscritura);
                                                reject('Error escribiendo archivo');
                                            } else {
                                                console.log('Escritura con exito!');
                                                resolve(fs.readFileSync(nuevoArchivo, "utf8"));
                                            }
                                        }
                                    );
                                }

                            }
                        );
                    }

                }
            )
        }
    )
}