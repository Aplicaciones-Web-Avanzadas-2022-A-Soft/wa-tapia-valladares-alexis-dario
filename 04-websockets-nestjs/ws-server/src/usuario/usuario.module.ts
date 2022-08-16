import {Module} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./dto/usuario.entity";
import {UsuarioController} from "./usuario.controller";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature(
                [UsuarioEntity], //entidad en este modulo
                'default' //nombre de la conexion
            )
        ],
        providers: [UsuarioService],
        exports: [UsuarioService],
        controllers:[
            UsuarioController
        ]
    }
)

export class UsuarioModule{

}
