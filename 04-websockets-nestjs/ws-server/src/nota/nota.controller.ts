import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {NotaService} from "./nota.service";
import {validate} from "class-validator";
import {NotaCreateDto} from "./dto/nota-create.dto";
import {NotaUpdateDto} from "./dto/nota-update.dto";

@Controller('nota')
export class NotaController{
    //Inyectar las dependencias
    constructor(
        private readonly notaService: NotaService
    ) {
    }

    @Get("/") // GET --> /nota
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ) {
        return this.notaService.find({});
    }

    @Get("/:id") //GET --> nota/#-numero
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ) {
        return this.notaService.findOneById(+params.id);
    }

    @Post("/") //POST --> nota/
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const nuevoRegistro = new NotaCreateDto();
        nuevoRegistro.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        nuevoRegistro.notaSegundoBimestre = bodyParams.notaSegundoBimestre;
        nuevoRegistro.notaExamenFinal = bodyParams.notaExamenFinal;
        nuevoRegistro.comentario = bodyParams.comentario;
        nuevoRegistro.usuario = bodyParams.usuario;

        const errores = await validate(nuevoRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.notaService.create(nuevoRegistro);
    }

    @Put("/:id") //POST --> nota/
    @HttpCode(201)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        const actualizarRegistro = new NotaUpdateDto();
        actualizarRegistro.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        actualizarRegistro.notaSegundoBimestre = bodyParams.notaSegundoBimestre;
        actualizarRegistro.notaExamenFinal = bodyParams.notaExamenFinal;
        actualizarRegistro.comentario = bodyParams.comentario;
        actualizarRegistro.usuario = bodyParams.usuario;

        const errores = await validate(actualizarRegistro);
        if (errores.length > 0) {
            console.error({errores});
            throw new BadRequestException({mensaje: 'Envio mal los datos'})
        }
        return this.notaService.update(actualizarRegistro, +params.id);
    }

    @Delete("/:id") //DELETE --> nota/#-numero
    @HttpCode(201)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ) {
        return this.notaService.delete(+params.id);
    }

}