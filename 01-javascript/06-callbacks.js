const fs = require('fs'); //file system
                        //importar modulo fs
//06-ejemplo.txt -> hola
console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt.txt', //1
    'utf-8',
    (error,contenido) => {
        console.log('SEGUNDO 1');
    }
);
fs.readFile(
    './06-ejemplo.txt.txt', //1
    'utf-8',
    (error,contenido) => {
        console.log('SEGUNDO 2');
    }
);
console.log('TERCERO');
