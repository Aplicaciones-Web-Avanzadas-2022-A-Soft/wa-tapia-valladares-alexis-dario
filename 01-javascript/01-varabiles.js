//MUTABLES E INMUTABLES

//Mutables
var numUno = 1;
let numdos = 2;
numUno = 5;
numdos = 8;
numUno = true;
numdos = false;

//Inmutables
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";
//Vamos a preferir CONST > LET -> nunca VAR

//Tipos de variables
const numero = 1; //number
const sueldo = 1.2; //number
const texto = "Alexis";//string
const apellido = 'Tapia';//string
const booleano = false; //boolean
const hijos = null;//object
const zapatos = undefined; //undefined

//Como saber el tipo de variable
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd"));//number
console.log(Number("asd"));//NaN

//Truty Falsy
if(true===true){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(true===false){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(""){
    console.log("String vacio es truty");
}else{
    console.log("String vacio es falsy");
}

if("Alexis"){
    console.log("String con datos es truty");
}else{
    console.log("String con datos es falsy");
}

if(-1){
    console.log("Negativos es truty");
}else{
    console.log("Negativos es falsy");
}

if(0){
    console.log("Cero es truty");
}else{
    console.log("Cero es falsy");
}

if(-1){
    console.log("Positivos es truty");
}else{
    console.log("Positivos es falsy");
}

//Orden de importancio
//1) const
//2) let
//3) X -> "var"

//Objetos Js (JSON)
const alexis = {
    nombre: "Alexis", //llave:valor
    apellido: "Tapia",
    edad: 24,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: "vino",
        talla: '40',
    },
    mascotas:['Doba','Coco','Lucy','Tigre'],
};
console.log(alexis);

//Acceder a las propiedades del objeto
alexis.nombre; //Alexis
alexis.apellido; //Tapia
alexis["nombre"];
//Cambiar valores
alexis.nombre = "Dario";
alexis["apellido"]="Valladares";
//Crear nuevos atributos o metodos dentro del objeto
alexis.sueldo; //undifined
console.log(alexis.sueldo);
alexis.sueldo = 100.99;
console.log(alexis.sueldo); //100.99
alexis["gastos"] = 55;
console.log(alexis.gastos);//55
console.log(alexis);

//Borar el valor de una propiedad
alexis.nombre = undefined;
console.log(alexis);
console.log("\nLLAVES");
console.log(Object.keys(alexis));
console.log("\nVALORES");
console.log(Object.values(alexis));
//DELETE la lllave y le valor
delete alexis.nombre; //Eliminar llave "nombre"
console.log(alexis);

//Variables por valor o referencia?

//Variables por valor en JS son las primitivas: number, string, boolean
let edadAlexis = 24;
let edadDario = edadAlexis; //Se guarda el "valor" de la variable
console.log("Edad alexis -> " + edadAlexis);
console.log("Edad dario -> " + edadDario);
edadAlexis = edadAlexis+1;
console.log("Edad alexis -> " + edadAlexis);
console.log("Edad dario -> " + edadDario);
