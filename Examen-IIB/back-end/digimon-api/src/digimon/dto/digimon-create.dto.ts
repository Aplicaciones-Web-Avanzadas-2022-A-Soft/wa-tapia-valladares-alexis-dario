import {IsNotEmpty, IsNumber, IsString} from "class-validator";


export class DigimonCreateDto{
    @IsNotEmpty()
    @IsNumber()
    idDigimon: number;

    @IsNotEmpty()
    @IsNumber()
    idelegido: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    nivel: string;

    @IsNotEmpty()
    @IsString()
    atributo: string;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsNotEmpty()
    @IsString()
    imagen: string;
}