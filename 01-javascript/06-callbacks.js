const fs = require('fs'); //file system
//importar modulo fs
//06-ejemplo.txt -> hola
console.log('PRIMERO');
//1) Leer archivo: 06-ejemplo.txt, luego imprimir en consola
//2) Despues del paso 1, leer archivo: 01-variables.js, luego imprimir en consola
//3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt con el contenido de los otros dos archivos
/*fs.writeFile(
    'nombreArchivoOPatch',
    'contenidoArchivo',
    (errorEscritura)=>{}
);*/

/*fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido) => {}
);*/

fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if (errorLecturaPrimerArchivo) {
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo el primer archivo');
        } else {
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                    if (errorLecturaSegundoArchivo) {
                        console.error(errorLecturaSegundoArchivo);
                        throw new Error('Error leyendo el segundo archivo');
                    } else {
                        //console.log(contenidoPrimerArchivo,contenidoSegundoArchivo);
                        const archivosUnidos = contenidoPrimerArchivo + contenidoSegundoArchivo;
                        fs.writeFile(
                            '06-nuevo-archivo.txt',
                            archivosUnidos,
                            (errorEscritura) => {
                                if (errorEscritura) {
                                    console.error(errorEscritura);
                                    throw new Error('Error escribiendo archivo');
                                } else {
                                    console.log('Escritura con exito!');
                                    console.log(fs.readFileSync("./06-nuevo-archivo.txt", "utf8"));
                                }
                            }
                        );
                    }

                }
            );
        }

    }
);
console.log('TERCERO');
