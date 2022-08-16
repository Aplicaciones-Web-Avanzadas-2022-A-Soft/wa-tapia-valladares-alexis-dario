import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate} from "class-validator";


@Controller('usuario')
export class UsuarioController {
    //Inyectar las dependencias
    constructor(
        private readonly usuarioService: UsuarioService
    ) {
    }

    /*Status*/
    //1 Informativo
    //2 OK
    //3 Redireccion
    //4 Error cliente
    //5 Error servidor

    /*Parametros*/
    //1 QueryParams --> viajan en la url
    //2 BodyParams --> viajan en el formulario
    //3 Parametros de ruta --> /usuario/:id/notas

    @Get("/") //GET/usuario/
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ) {
        return this.usuarioService.find({});
    }

    @Get("/:id") //GET/usuario/#-numero
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ) {
        return this.usuarioService.findOneById(+params.id);
    }

    @Post("/") //POST/usuario
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const nuevoRegistro = new UsuarioCreateDto();
        nuevoRegistro.rol = bodyParams.rol;
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.apellidos = bodyParams.apellidos;

        const errores = await validate(nuevoRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.usuarioService.create(nuevoRegistro);
    }

    @Put("/:id") //PUT/usuario/#-numero
    @HttpCode(201)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const actualizarRegistro = new UsuarioCreateDto();
        actualizarRegistro.rol = bodyParams.rol;
        actualizarRegistro.nombres = bodyParams.nombres;
        actualizarRegistro.apellidos = bodyParams.apellidos;

        const errores = await validate(actualizarRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }

        return this.usuarioService.update(actualizarRegistro, +params.id);
    }

    @Delete("/:id") //DELETE/usuario/#-numero
    @HttpCode(201)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        return this.usuarioService.delete(+params.id);
    }
}