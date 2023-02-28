import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFillingComponent } from './pages/tax-filling/tax-filling.component';

const routes: Routes = [
  {
    path: '',
    component: TaxFillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxesRoutingModule { }
