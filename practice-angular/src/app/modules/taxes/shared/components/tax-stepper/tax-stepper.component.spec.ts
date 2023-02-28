import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxStepperComponent } from './tax-stepper.component';

describe('TaxStepperComponent', () => {
  let component: TaxStepperComponent;
  let fixture: ComponentFixture<TaxStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
