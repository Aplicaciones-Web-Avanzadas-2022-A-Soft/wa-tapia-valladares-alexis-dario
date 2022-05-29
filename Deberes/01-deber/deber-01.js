// Crear una funcion que reciba 3 parametros y que cumpla con el ejercicio en clase
//utilizar promesas

const fs = require('fs');

function leerEscribir(path1) {
    const promesaLeerEscribir = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path1,
                'utf-8',
                (errorLectura1, contenidoLectura1) => {
                    if (errorLectura1) {
                        reject(errorLectura1);
                    } else {
                        resolve(contenidoLectura1);
                    }
                }
            )
        }
    )
    return promesaLeerEscribir;
}

leerEscribir('ex1.txt')
    .then(
        respuesta => {
            console.log(respuesta);
        }
    )


/*fs.readFile(
        path2,
        'utf-8',
        (errorLectura2, contenidoLectura2) => {
            if (errorLectura2) {
                reject(errorLectura2);
            } else {
                resolve(contenidoLectura2);
            }
        }
    );
    fs.writeFile(
        '06-nuevo-archivo.txt',
        archivosUnidos,
        (errorEscritura)=>{
            if(errorEscritura){
                console.error(errorEscritura);
                throw new Error('Error escribiendo archivo');
            }else{
                console.log('Escritura con exito!');
                console.log(fs.readFileSync("./06-nuevo-archivo.txt", "utf8"));
            }
        }
    );
 */
