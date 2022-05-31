//npm install –g typescript
//tsc
let nombre: string = 'Alexis'; //Primitivo
let nombre2: String = 'Alexis2';//Clase String
//nombre = 1;
nombre = 'Dario';
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//Duck Typing
let apellido = 'Tapia';
apellido = 'Valladares';
apellido.toUpperCase();
//apellido =1; -> Error, no es un string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = new Date();
edadMultiple = 222;
let numeroUnico: number = 1; //para igualar a otros se castea
numeroUnico = edadMultiple as number;
//edadMultiple as Date;
//edadMultiple as number;
//edadMultiple as string;


//tsc nombreArchivo --target ES6 ->diferentes versiones