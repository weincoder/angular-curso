import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasComponent } from './metas.component';

fdescribe('Pruebas relacionadas al MetasComponent', () => {
  let component: MetasComponent;
  let fixture: ComponentFixture<MetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería calcular de forma adecuada el %alcanzado', () => {
    //Arrenge
    const mockMeta = {
      "id": "2",
      "detalles": "Backend",
      "periodo": "año",
      "eventos": 6,
      "icono": "📚",
      "meta": 12,
      "plazo": "2030-01-01",
      "completado": 6
    }
    const alcanzadoEsperado = 50;
    //Act
    component.meta = mockMeta
    component.ngOnInit()
    //Assert
    expect(component.alcanzado).toEqual(alcanzadoEsperado)
  });
  it('Debería dibujar en pantalla el detalle de la meta ingresada', () => {
    //Arrenge
    const mockMeta = {
      "id": "2",
      "detalles": "Backend",
      "periodo": "año",
      "eventos": 6,
      "icono": "📚",
      "meta": 12,
      "plazo": "2030-01-01",
      "completado": 6
    }
    const alcanzadoEsperado = 50;
    //Act
    component.meta = mockMeta
    component.ngOnInit()
    fixture.detectChanges();
    const parrafo = fixture.nativeElement.querySelectorAll('p')[1];
    //Assert
    expect(parrafo.textContent).toContain(mockMeta.detalles)
  });
});
