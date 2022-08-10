import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NotaEntity} from "./nota.entity";
import {Repository} from "typeorm";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {NotaCreateDto} from "./dto/nota-create.dto";
import {NotaUpdateDto} from "./dto/nota-update.dto";

@Injectable()
export class NotaService{
    constructor(
        @InjectRepository(NotaEntity, 'default')
        public notaRepository: Repository<NotaEntity>
    ) {
    }

    find(opciones: FindManyOptions<NotaEntity>){
        return this.notaRepository.find(opciones)
    }

    findOneById(id: number){
        return this.notaRepository.find({
            where:{
                id: id
            }
        })
    }

    create(notaCrear:NotaCreateDto){
        return this.notaRepository.save(notaCrear)
    }

    update(notaActulizar:NotaUpdateDto, id){
        return this.notaRepository.save(
            {...notaActulizar, id}
        )
    }

    delete(id: number){
        return this.notaRepository.delete(id)
    }
}
