import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { TaxFillingComponent } from './pages/tax-filling/tax-filling.component';
import { TaxInputDetailComponent } from './shared/components/tax-input-detail/tax-input-detail.component';
import { ReviewConfirmComponent } from './shared/components/review-confirm/review-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxStepperComponent } from './shared/components/tax-stepper/tax-stepper.component';


@NgModule({
  declarations: [
    TaxFillingComponent,
    TaxInputDetailComponent,
    ReviewConfirmComponent,
    TaxStepperComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TaxesModule {
}
