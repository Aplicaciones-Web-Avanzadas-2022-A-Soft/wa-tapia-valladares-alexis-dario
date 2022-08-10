import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {UsuarioEntity} from "../../usuario/dto/usuario.entity";

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
    usuario: UsuarioEntity
}
