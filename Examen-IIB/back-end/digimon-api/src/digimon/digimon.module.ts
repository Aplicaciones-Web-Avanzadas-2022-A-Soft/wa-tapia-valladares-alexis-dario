import { Module } from '@nestjs/common';
import { DigimonController } from './digimon.controller';
import { DigimonService } from './digimon.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DigimonEntity} from "./digimon.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature(
        [DigimonEntity]
    )
  ],
  controllers: [DigimonController],
  providers: [DigimonService]
})
export class DigimonModule {}
