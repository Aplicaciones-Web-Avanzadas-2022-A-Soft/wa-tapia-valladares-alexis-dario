function sumarNumeros(numeroInicial: number, ...numerosInfinitos: number[]): number {
    return numeroInicial;
}

function imprimir(mensaje:string):void{ //Undefined
    console.log('Hola '+mensaje);
}

const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNUmerosTres: (number|string|boolean)[] = [1,'dos',true];
const arregloNUmerosCuatro: Array<number|string|boolean> = [1,'dos',true];
let arregloNumeroCinco: number[] | string[] = [1,2];
arregloNumeroCinco = ['uno','dos'];
