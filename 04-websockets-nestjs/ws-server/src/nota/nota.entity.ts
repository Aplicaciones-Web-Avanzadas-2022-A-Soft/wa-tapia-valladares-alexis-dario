import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {UsuarioEntity} from "../usuario/dto/usuario.entity";

@Entity({name:'user_nota'})
export class NotaEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'user_nota_primer_bimestre',
        type: 'integer',
        nullable: true
    })
    notaPrimerBimestre: number;

    @Column({
        name: 'user_nota_segundo_bimestre',
        type: 'integer',
        nullable: true
    })
    notaSegundoBimestre: number;

    @Column({
        name: 'user_nota_examen_final',
        type: 'integer',
        nullable: true
    })
    notaExamenFinal: number;

    @Column({
        name: 'user_comentario',
        type: 'varchar',
        length: 255,
        nullable:true
    })
    comentario: string;

    @ManyToOne(
        ()=> UsuarioEntity, //Entidad relacionada
        (user) => user.notas
    )
    usuario: UsuarioEntity | number;
}
