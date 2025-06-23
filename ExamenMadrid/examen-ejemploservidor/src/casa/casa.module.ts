import { Module } from '@nestjs/common';
import { CasaService } from './casa.service';
import { CasaController } from './casa.controller';

@Module({
  providers: [CasaService],
  controllers: [CasaController]
})
export class CasaModule {}
