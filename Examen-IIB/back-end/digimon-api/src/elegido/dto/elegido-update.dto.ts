import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class ElegidoUpdateDto{
    @IsOptional()
    @IsNumber()
    idElegido: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    apellido: string;

    @IsOptional()
    @IsString()
    sexo: string;

    @IsOptional()
    @IsNumber()
    estatura: number;

    @IsOptional()
    @IsNumber()
    telefono: number;
}