import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class NotaUpdateDto{
    @IsOptional()
    @IsNumber()
    notaPrimerBimestre: number

    @IsOptional()
    @IsNumber()
    notaSegundoBimestre: number

    @IsOptional()
    @IsNumber()
    notaExamenFinal: number

    @IsOptional()
    @IsString()
    comentario: string

    @IsNotEmpty()
    @IsNumber()
    usuario: number;
}
