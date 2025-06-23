import { Injectable } from '@nestjs/common';

@Injectable()
export class CasaService {
  private casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  obtenerCasas(idCasa?: number) {
    if (idCasa !== undefined) {
      const casa = this.casas.find((c) => c.id === idCasa);
      if (!casa) {
        return null;
      }
      return [casa];
    }
    return this.casas;
  }
}
