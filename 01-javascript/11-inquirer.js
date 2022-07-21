//npm init -> package.json -> dependencias scripts
//npm install inquirer -> npm i inquirer -> ejecutar en la carpeta raiz
const inquirer = require('inquirer');

async function main() {
    try {
        const respuesta = await inquirer
            .prompt([
                    {
                        type: 'input',
                        name: 'apellido',
                        message: 'Ingresa tu nombre:'
                    },
                    {
                        type: 'input',
                        name: 'edad',
                        message: 'Ingresa tu edad:'
                    }
                ]
            );
        console.log('Respuesta', respuesta);
    } catch (e) {
        console.error(e);
    }
}

main();


//Stringify y Parse
const arregloUsuario = [
    {
        id: 1,
        nombre: 'Alexis',
    }
];

const arregloGuardado = JSON.stringify(arregloUsuario); //Arreglos u Objetos
console.log('arregloGuardado',arregloGuardado);

const arregloRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado',arregloRestaurado);
