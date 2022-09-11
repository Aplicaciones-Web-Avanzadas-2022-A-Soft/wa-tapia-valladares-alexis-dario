import {IsNumber, IsOptional, IsString} from "class-validator";

export class DigimonUpdateDto{
    @IsOptional()
    @IsNumber()
    idDigimon: number;

    @IsOptional()
    @IsNumber()
    idelegido: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    nivel: string;

    @IsOptional()
    @IsString()
    atributo: string;

    @IsOptional()
    @IsString()
    tipo: string;

    @IsOptional()
    @IsString()
    imagen: string;
}