import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'; // Asegúrate de que la ruta sea correcta
import { CasaModule } from './casa/casa.module';
import { AuthController } from './app.auth-controller';

@Module({
  imports: [
    DatabaseModule, // Importa el módulo de la base de datos
    CasaModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule { }