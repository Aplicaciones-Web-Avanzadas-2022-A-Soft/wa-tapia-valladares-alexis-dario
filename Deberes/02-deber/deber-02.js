//TEMA -> Ninio_Elegido => Digimons
const inquirer = require('inquirer');

async function main() {
    try {
        let opcionMenuP = -1;
        mostrarMenu();
        opcionMenuP = await  inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'opcion',
                    message: '\nIngrese la opcion: '
                }

            ]);
        menuCasos(opcionMenuP.opcion);
    } catch (e) {
        console.error(e);
    }
}

function mostrarMenu() {
    console.log("\nDIGIMON SYSTEM!\n\nEscoga una opción:\n" +
        "\t1) Crear un ninio elegido\n" +
        "\t2) Ver los ninios elegidos\n" +
        "\t3) Actualizar un ninio elegido\n" +
        "\t4) Eliminar a un ninio elegido\n" +
        "\t5) Salir");
}

function menuCasos(opcion){
    switch (opcion){
        case '1':
            console.log('hola 1');
            break;
        case '2':
            console.log('hola 2');
            break;
        case '3':
            console.log('hola 3');
            break;
        case '4':
            console.log('hola 4');
            break;
        case '5':
            console.log('\nADIOS\n');
            break;
        default:
            console.log('Esa opcion no existe :(')
            break;
    }
}

function accionOpcion(){

}

main()

/*function leer(pathLectura) {
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
}*/