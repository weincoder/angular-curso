import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabazamientoComponent } from './encabazamiento.component';

describe('EncabazamientoComponent', () => {
  let component: EncabazamientoComponent;
  let fixture: ComponentFixture<EncabazamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabazamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabazamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
