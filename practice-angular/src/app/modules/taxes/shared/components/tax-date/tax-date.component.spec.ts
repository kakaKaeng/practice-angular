import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDateComponent } from './tax-date.component';

describe('TaxDateComponent', () => {
  let component: TaxDateComponent;
  let fixture: ComponentFixture<TaxDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
