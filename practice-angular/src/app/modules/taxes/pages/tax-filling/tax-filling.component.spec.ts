import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFillingComponent } from './tax-filling.component';

describe('TaxFillingComponent', () => {
  let component: TaxFillingComponent;
  let fixture: ComponentFixture<TaxFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
