import { TestBed } from '@angular/core/testing';

import { MetasService } from './meta/metas.service';

fdescribe('Pruebas del MetasService', () => {
  let service: MetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería aumentar la cantidad de metas', () => {
    //Arrenge
    let cantidaMetasIniciales = service.obtenerMetas().length;
    let metaACrear = {
      "id": "67",
      "detalles": "Backend",
      "periodo": "año",
      "eventos": 6,
      "icono": "📚",
      "meta": 12,
      "plazo": "2030-01-01",
      "completado": 0
    }
    //Act
    service.crearMetas(metaACrear)
    let cantidadMetasActuales = service.obtenerMetas().length
    //Assert
    expect(cantidaMetasIniciales< cantidadMetasActuales).toBeTrue()
    
  });
  it('Debería actualizar la meta', () => {
    //Arrenge
    let metaActualizar =  {
      "id": "3",
      "detalles": "Viajar a parques nacionales",
      "periodo": "mes",
      "eventos": 1,
      "icono": "✈️",
      "meta": 60,
      "plazo": "2030-01-01",
      "completado": Math.random()
    }
    const metaInicial = service.obtenerMetas()[2]
    //Act
    service.actualizarMetas(metaActualizar)
    const metaFinal = service.obtenerMetas()[2]
    //Assert
    expect(metaInicial.completado != metaFinal.completado).toBeTrue()
  });


});
