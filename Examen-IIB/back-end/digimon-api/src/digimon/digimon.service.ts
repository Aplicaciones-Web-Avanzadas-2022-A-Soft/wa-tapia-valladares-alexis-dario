import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import  {DigimonEntity} from "./digimon.entity";
import {FindManyOptions, Repository} from "typeorm";
import {DigimonCreateDto} from "./dto/digimon-create.dto";
import {DigimonUpdateDto} from "./dto/digimon-update.dto";

@Injectable()
export class DigimonService {
    constructor(
        @InjectRepository(DigimonEntity)
        public digimonRepository: Repository<DigimonEntity>
    ) {
    }

    find(opciones: FindManyOptions<DigimonEntity>) {
        return this.digimonRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.digimonRepository.findOne({
            where: {
                iddigimon: id
            },
        })
    }

    create(datosCrear: DigimonCreateDto) {
        return this.digimonRepository.save(datosCrear);
    }

    update(datosActualizar: DigimonUpdateDto, id: number) {
        return this.digimonRepository.save(
            {...datosActualizar, id}
        );
    }

    delete(id: number) {
        return this.digimonRepository.delete(id);
    }


}
