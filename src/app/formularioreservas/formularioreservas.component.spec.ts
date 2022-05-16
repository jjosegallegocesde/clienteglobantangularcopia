import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreservasComponent } from './formularioreservas.component';

describe('FormularioreservasComponent', () => {
  let component: FormularioreservasComponent;
  let fixture: ComponentFixture<FormularioreservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioreservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
