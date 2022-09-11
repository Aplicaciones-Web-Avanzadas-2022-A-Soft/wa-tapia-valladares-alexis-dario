import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DigimonEntity} from "../digimon/digimon.entity";

@Entity({name: 'elegido'})
export class ElegidoEntity {
    @PrimaryGeneratedColumn()
    idelegido: number;

    @Column({
        name: 'nombre',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    nombre: string;

    @Column({
        name: 'apellido',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    apellido: string;

    @Column({
        name: 'sexo',
        type: "char",
        length: 1,
        nullable: false,
    })
    sexo: string;

    @Column({
        name: 'estatura',
        type: 'float',
        nullable: false,
    })
    estatura: number;

    @Column({
        name: 'telefono',
        type: 'integer',
        nullable: false,
    })
    telefono: number;

    @OneToMany(
        () => DigimonEntity, //Entidad Relacionada
        (digimon) => digimon.idelegido
    )
    digimon: DigimonEntity[]
}