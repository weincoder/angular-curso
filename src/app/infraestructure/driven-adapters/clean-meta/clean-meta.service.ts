import { Injectable, signal } from '@angular/core';
import { MetasGateway } from '../../../domain/models/gateways/metas-gateway';
import { Metas } from '../../../domain/models/metas';

@Injectable({
  providedIn: 'root'
})
export class CleanMetaService implements MetasGateway {
  metas = signal<Metas[]>([
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
  ])
  constructor() { }
  obtenerMetas(): Metas[] {
    return this.metas();
  }
  actualizarMetas(meta: Metas): Metas[] {
    this.metas.update((metas)=> {
      return [...metas, meta]
    })
    return this.metas()
  }
  eliminarMetas(meta: Metas): Metas[] {
    throw new Error('Method not implemented.');
  }
  obtenerMetaPorId(id: string): Metas[] {
    throw new Error('Method not implemented.');
  }
}
