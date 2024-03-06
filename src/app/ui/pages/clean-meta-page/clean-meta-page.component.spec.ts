import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanMetaPageComponent } from './clean-meta-page.component';

describe('CleanMetaPageComponent', () => {
  let component: CleanMetaPageComponent;
  let fixture: ComponentFixture<CleanMetaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanMetaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleanMetaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
