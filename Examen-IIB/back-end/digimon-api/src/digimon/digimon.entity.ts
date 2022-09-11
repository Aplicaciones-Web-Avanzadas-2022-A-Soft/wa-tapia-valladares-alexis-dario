import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ElegidoEntity} from "../elegido/elegido.entity";

@Entity({name: 'digimon'})
export class DigimonEntity {
    @PrimaryGeneratedColumn()
    iddigimon: number;

    @Column({
        name: 'idelegido',
        type: "integer",
        nullable: false,
    })
    idelegido: number;

    @Column({
        name: 'nombre',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    nombre: string;

    @Column({
        name: 'nivel',
        type: "varchar",
        length: 50,
        nullable: false,
    })
    nivel: string;

    @Column({
        name: 'atributo',
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    atributo: string;

    @Column({
        name: 'tipo',
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    tipo: string;

    @Column({
        name: 'imagen',
        type: 'varchar',
        length:255,
        nullable: false,
    })
    imagen: string;

}