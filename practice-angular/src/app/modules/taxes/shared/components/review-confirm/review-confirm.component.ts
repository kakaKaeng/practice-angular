import { Component, Input } from '@angular/core';
import { TaxModel } from '../../models/tax.models';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.scss']
})
export class ReviewConfirmComponent {
  @Input() formTaxModel?: TaxModel;

  x = {
    'type_of_filling': 'ordinary',
    'month': 0,
    'year': 2023,
    'additional_type': null,
    'total_tax': '10000.111',
    'total_vat': '123',
    'surcharge': null,
    'penalty': null
  }

  constructor() {
  }

  getDateDisplay(): string {
    const month = new Date(this.formTaxModel!.year, this.formTaxModel!.month, 1)
    const monthName = month.toLocaleString('default', {month: 'long'})
    return `${monthName} ${this.formTaxModel!.year}`
  }

  addCommas(value: string | undefined): string {
    if (value) {
      const [integerPart, decimalPart] = value.split('.');
      const integerPartWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return decimalPart !== undefined ? `${integerPartWithCommas}.${decimalPart}` : integerPartWithCommas;
    }
    return ''
  }
}
