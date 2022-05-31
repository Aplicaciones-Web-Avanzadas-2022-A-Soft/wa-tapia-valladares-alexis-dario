//npm install –g typescript
//tsc
let nombre = 'Alexis'; //Primitivo
let nombre2 = 'Alexis2'; //Clase String
//nombre = 1;
nombre = 'Dario';
let edad = 32;
let casado = false;
let fecha = new Date();
let sueldo;
sueldo = 12.4;
//Duck Typing
let apellido = 'Tapia';
apellido = 'Valladares';
apellido.toUpperCase();
//apellido =1; -> Error, no es un string
let marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';
let edadMultiple = 2;
edadMultiple = '2';
edadMultiple = new Date();
edadMultiple = 222;
let numeroUnico = 1; //para igualar a otros se castea
numeroUnico = edadMultiple;
//edadMultiple as Date;
//edadMultiple as number;
//edadMultiple as string;
