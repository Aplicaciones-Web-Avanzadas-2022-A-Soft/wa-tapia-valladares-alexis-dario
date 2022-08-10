import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {UsuarioEntity} from "../../usuario/dto/usuario.entity";

export class NotaCreateDto{
    @IsNotEmpty()
    @IsNumber()
    notaPrimerBimestre: number

    @IsNotEmpty()
    @IsNumber()
    notaSegundoBimestre: number

    @IsNotEmpty()
    @IsNumber()
    notaExamenFinal: number

    @IsNotEmpty()
    @IsString()
    comentario: string

    @IsNotEmpty()
    usuario: UsuarioEntity
}
