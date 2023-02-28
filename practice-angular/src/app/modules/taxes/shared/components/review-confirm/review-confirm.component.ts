import { Component, Input } from '@angular/core';
import { TaxModel } from '../../models/tax.models';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.scss']
})
export class ReviewConfirmComponent {
  @Input() formTaxModel?: TaxModel

  constructor() {
  }


}
