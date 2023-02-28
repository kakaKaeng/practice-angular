import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInputDetailComponent } from './tax-input-detail.component';

describe('TaxInputDetailComponent', () => {
  let component: TaxInputDetailComponent;
  let fixture: ComponentFixture<TaxInputDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxInputDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInputDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
