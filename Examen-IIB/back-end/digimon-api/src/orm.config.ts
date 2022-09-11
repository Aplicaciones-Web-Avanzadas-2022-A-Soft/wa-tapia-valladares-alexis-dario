import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'pos12345',
    host: 'localhost',
    database: 'digimons2',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']
};