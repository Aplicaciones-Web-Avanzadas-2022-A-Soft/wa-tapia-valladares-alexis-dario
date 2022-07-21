// Crear una funcion que reciba 3 parametros y que cumpla con el ejercicio en clase
//utilizar promesas

const fs = require('fs');

function leerEscribir(pathArchivo1,pathArchivo2,pathNuevoArchivo) {
    const promesaLeerEscribir = new Promise(
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
                                        pathNuevoArchivo,
                                        archivosUnidos,
                                        (errorEscritura) => {
                                            if (errorEscritura) {
                                                //console.error(errorEscritura);
                                                reject('Error escribiendo archivo');
                                            } else {
                                                console.log('Escritura con exito!');
                                                resolve(fs.readFileSync(pathNuevoArchivo, "utf8"));
                                            }
                                        }
                                    );
                                }

                            }
                        );
                    }

                }
            );
        }
    )
    return promesaLeerEscribir;
}

leerEscribir('ex1.txt','ex2.txt','nuevoArchivo.txt')
    .then(
        respuesta => {
            console.log(respuesta);
        }
    )
    .catch(
        error => {
            console.error(error);
        }
    )