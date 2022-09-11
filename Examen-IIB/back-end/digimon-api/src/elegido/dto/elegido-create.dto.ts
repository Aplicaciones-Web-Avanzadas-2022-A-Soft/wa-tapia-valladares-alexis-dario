import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class ElegidoCreateDto {
    @IsNotEmpty()
    @IsNumber()
    idElegido: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsString()
    sexo: string;

    @IsNotEmpty()
    @IsNumber()
    estatura: number;

    @IsNotEmpty()
    @IsNumber()
    telefono: number;
}