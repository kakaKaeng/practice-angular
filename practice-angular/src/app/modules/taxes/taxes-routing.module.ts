import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFilingComponent } from './pages/tax-filing/tax-filing.component';

const routes: Routes = [
  {
    path: '',
    component: TaxFilingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxesRoutingModule { }
