import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {config} from "./orm.config";
import { ElegidoModule } from './elegido/elegido.module';
import { DigimonModule } from './digimon/digimon.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ElegidoModule, DigimonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
