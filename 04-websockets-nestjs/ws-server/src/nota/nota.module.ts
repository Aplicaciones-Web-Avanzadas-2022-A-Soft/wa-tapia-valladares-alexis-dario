import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaService} from "./nota.service";
import {NotaEntity} from "./nota.entity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature(
                [NotaEntity], //Entidad en este modulo
                'default' //nombre de la conexion
            )
        ],
        providers: [NotaService],
        exports: [],
    }
)

export class NotaModule {

}
