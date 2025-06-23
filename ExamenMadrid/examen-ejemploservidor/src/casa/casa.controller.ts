import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { CasaService } from './casa.service';
import { Response } from 'express';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Get()
  getCasa(@Query('idCasa') idCasa: string, @Res() res: Response) {
    const id = idCasa ? parseInt(idCasa) : undefined;
    const resultado = this.casaService.obtenerCasas(id);

    if (!resultado) {
      return res.status(HttpStatus.NOT_FOUND).send('No se encuentra');
    }

    return res.status(HttpStatus.OK).json(resultado);
  }
}
