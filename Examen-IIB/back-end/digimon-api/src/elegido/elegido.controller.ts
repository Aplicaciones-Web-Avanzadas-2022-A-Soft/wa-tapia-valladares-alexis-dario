import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from '@nestjs/common';

import {ElegidoService} from "./elegido.service";
import {ElegidoCreateDto} from "./dto/elegido-create.dto";
import {validate} from "class-validator";

@Controller('elegido')
export class ElegidoController {
    constructor(
        private readonly elegidoService: ElegidoService
    ) {}

    @Get("/") // GET /usuario/
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.elegidoService.find({});
    }

    @Get("/:id") // GET /usuario/1
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        return this.elegidoService.findOneById(+params.id); // +"1" = 1
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new ElegidoCreateDto(); // creamos dto
        nuevoRegistro.idElegido = bodyParams.idElegido;
        nuevoRegistro.nombre = bodyParams.nombres;
        nuevoRegistro.apellido = bodyParams.apellido;
        nuevoRegistro.sexo = bodyParams.sexo;
        nuevoRegistro.estatura = bodyParams.estatura;
        nuevoRegistro.telefono = bodyParams.telefono;

        const errores = await validate(nuevoRegistro); // validamos
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envio mal datos'});
        }
        // Creamos
        return this.elegidoService.create(nuevoRegistro);
    }

    @Put("/:id") // PUT /usuario/:id
    @HttpCode(200)
    update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.elegidoService.update(
            bodyParams,
            +params.id
        );
    }

    @Delete("/:id") // DELETE /usuario/:id
    @HttpCode(200)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.elegidoService.delete(+params.id);
    }
}
