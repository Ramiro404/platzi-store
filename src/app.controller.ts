import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import config from './config';

@ApiTags('Main')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('DATA') private data: any[],
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('env')
  getEnvs(): string {
    const apiKey = this.configService.apiKey;
    const dbName = this.configService.database.name;
    return `${apiKey}  ${dbName}`;
  }

  @Get('todo')
  getTodos(): any[] {
    return this.data;
  }
}

/**
 * Los controladores manejarán las rutas o endpoints que la aplicación
 * necesite, además de validar los permisos del usuario, filtro y manipulación de  datos.
 * El controlador importa un servicio que son los responsables de la loginca y
 * obtención de datos de una base de datos que el controlador require
 */
