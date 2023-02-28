import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { TaxFillingComponent } from './pages/tax-filling/tax-filling.component';
import { TaxInputDetailComponent } from './shared/components/tax-input-detail/tax-input-detail.component';
import { ReviewConfirmComponent } from './shared/components/review-confirm/review-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxStepperComponent } from './shared/components/tax-stepper/tax-stepper.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaxDateComponent } from './shared/components/tax-date/tax-date.component';


@NgModule({
  declarations: [
    TaxFillingComponent,
    TaxInputDetailComponent,
    ReviewConfirmComponent,
    TaxStepperComponent,
    TaxDateComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule,
    ReactiveFormsModule,
    TooltipModule,
    NgSelectModule,
    FormsModule,
  ]
})
export class TaxesModule {
}
