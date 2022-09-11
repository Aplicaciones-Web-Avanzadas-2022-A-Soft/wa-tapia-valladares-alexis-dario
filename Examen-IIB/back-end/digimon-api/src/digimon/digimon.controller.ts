import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from '@nestjs/common';
import {DigimonService} from "./digimon.service";
import {DigimonCreateDto} from "./dto/digimon-create.dto";
import {validate} from "class-validator";
import {DigimonUpdateDto} from "./dto/digimon-update.dto";

@Controller('digimon')
export class DigimonController {
    constructor(
        private readonly digimonService: DigimonService
    ) {
    }

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ) {
        return this.digimonService.find({})
    }

    @Get("/:id") //GET --> nota/#-numero
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ) {
        return this.digimonService.findOneById(+params.id);
    }

    @Post("/") //POST --> nota/
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const nuevoRegistro = new DigimonCreateDto();
        nuevoRegistro.idDigimon = bodyParams.idDigimon;
        nuevoRegistro.idelegido = bodyParams.idelegido;
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.nivel = bodyParams.nivel;
        nuevoRegistro.atributo = bodyParams.atributo;
        nuevoRegistro.tipo = bodyParams.tipo;
        nuevoRegistro.imagen = bodyParams.imagen;

        const errores = await validate(nuevoRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.digimonService.create(nuevoRegistro);
    }

    @Put("/:id") //POST --> nota/
    @HttpCode(201)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const actualizarRegistro = new DigimonUpdateDto();
        actualizarRegistro.idDigimon = bodyParams.idDigimon;
        actualizarRegistro.idelegido = bodyParams.idelegido;
        actualizarRegistro.nombre = bodyParams.nombre;
        actualizarRegistro.nivel = bodyParams.nivel;
        actualizarRegistro.atributo = bodyParams.atributo;
        actualizarRegistro.tipo = bodyParams.tipo;
        actualizarRegistro.imagen = bodyParams.imagen;

        const errores = await validate(actualizarRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.digimonService.update(actualizarRegistro, +params.id);
    }

    @Delete("/:id") //DELETE --> nota/#-numero
    @HttpCode(201)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        return this.digimonService.delete(+params.id);
    }
}
