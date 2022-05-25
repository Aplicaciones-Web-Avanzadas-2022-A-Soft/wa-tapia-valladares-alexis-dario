function soloNumero(a, b, c){
    return a - b +c; //valor a devolver
}

/*JS permite el uso de funciones sin validaciones*/
//soloNumeros('v',true,[1,2,3]);
//soloNumeros((a)=>a,(a)=>a,(a)=>a);
//soloNumeros(1,2,3,4,5,6,7,8);
//soloNumeros();

function soloLetras(a,b,c){ //Sin return de devuelve: undefined
    console.log(a,b,c);
}

//Funciones nombradas - named functions
function funcionNombrada(){
}
//Funciones anonimas - Anonymus functions
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};
[].forEach(function (){})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anonimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x + 1;
};
const funcionFatArrow6 = (x) => x+1; //FAT ARROW FUNCTIONS
                                    //Una solo linea
                                    //Omito el return
                                    //Omito las llaves
const funcionFatArrow7 = x => x+1;  //SOLO SI se tiene un parametro
                                    //Omito los parentesis
const funcionFatArrow8 = (x,y,z) => x+y+z;

// ... -> Parametros infinitos que llegan en  un arreglo
// Solo se puede tener un parametro inf. por funcion
function sumarNumeros(...otrosNumeros){
    let total = 0;
    otrosNumeros.forEach(
        (valorActual)=>{
            total = total + valorActual;
        }
    );
    return total;
    //return otrosNumeros.reduce((a,v)=>a+v,0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10);

