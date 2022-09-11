import { Module } from '@nestjs/common';
import { ElegidoController } from './elegido.controller';
import { ElegidoService } from './elegido.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ElegidoEntity} from "./elegido.entity";

@Module({
  imports:[
      TypeOrmModule.forFeature(
          [ElegidoEntity]
      )
  ],
  controllers: [ElegidoController],
  providers: [ElegidoService]
})
export class ElegidoModule {}
