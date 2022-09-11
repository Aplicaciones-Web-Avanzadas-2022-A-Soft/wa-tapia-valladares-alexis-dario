import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ElegidoEntity} from "./elegido.entity";
import {FindManyOptions, Repository} from "typeorm";
import {ElegidoCreateDto} from "./dto/elegido-create.dto";
import {ElegidoUpdateDto} from "./dto/elegido-update.dto";

@Injectable()
export class ElegidoService {
    constructor(
        @InjectRepository(ElegidoEntity)
        public elegidoRepository: Repository<ElegidoEntity>
    ) {
    }

    find(opciones: FindManyOptions<ElegidoEntity>){
        return this.elegidoRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.elegidoRepository.findOne({
            where: {
                idelegido: id
            },
        })
    }

    create(datosCrear: ElegidoCreateDto) {
        return this.elegidoRepository.save(datosCrear);
    }

    update(datosActualizar: ElegidoUpdateDto , id: number) {
        return this.elegidoRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number) {
        return this.elegidoRepository.delete(id);
    }

}
