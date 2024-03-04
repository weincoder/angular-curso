import { Injectable } from '@angular/core';
import { Metas } from '../core/models/metas';

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  metasMock: Metas[] = [
    {
      "id": "1",
      "detalles": "Correr por 30 minutos",
      "periodo": "día",
      "eventos": 1,
      "icono": "🏃‍♂️",
      "meta": 365,
      "plazo": "2030-01-01",
      "completado": 5
    },
    {
      "id": "2",
      "detalles": "Leer libros",
      "periodo": "año",
      "eventos": 6,
      "icono": "📚",
      "meta": 12,
      "plazo": "2030-01-01",
      "completado": 0
    },
    {
      "id": "3",
      "detalles": "Viajar a parques nacionales",
      "periodo": "mes",
      "eventos": 1,
      "icono": "✈️",
      "meta": 60,
      "plazo": "2030-01-01",
      "completado": 40
    }
  ]

  constructor() { }

  obtenerMetas(): Metas[]{
    return this.metasMock;
  }
}
