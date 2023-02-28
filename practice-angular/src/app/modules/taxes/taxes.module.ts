import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { TaxFillingComponent } from './pages/tax-filling/tax-filling.component';
import { TaxInputDetailComponent } from './shared/components/tax-input-detail/tax-input-detail.component';
import { ReviewConfirmComponent } from './shared/components/review-confirm/review-confirm.component';


@NgModule({
  declarations: [
    TaxFillingComponent,
    TaxInputDetailComponent,
    ReviewConfirmComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule
  ]
})
export class TaxesModule { }
