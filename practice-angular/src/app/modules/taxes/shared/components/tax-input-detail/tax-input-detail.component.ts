import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tax-input-detail',
  templateUrl: './tax-input-detail.component.html',
  styleUrls: ['./tax-input-detail.component.scss']
})
export class TaxInputDetailComponent {
  @Input() formTaxModel!: FormGroup
  @Output() formTaxModelChange = new EventEmitter<FormGroup>();

  mockTypeList = [
    {
      label: 'On-Time',
      value: 'on_time'
    }
  ]

  constructor() {
  }

  removeAlphabet(event: any) {
    let numericValue = event.target.value.replace(/[^0-9.]/g, '');
    const decimalCheck = numericValue.split('.');
    if (decimalCheck.length > 1 && decimalCheck[1].length > 2) {
      decimalCheck[1] = decimalCheck[1].slice(0, 2);
      numericValue = decimalCheck[0] + '.' + decimalCheck[1];
    }
    event.target.value = numericValue
  }

  removeCommas(event: any) {
    event.target.value = event.target.value.replace(/,/g, '');
  }

  addCommas(event: any) {
    const [integerPart, decimalPart] = event.target.value.split('.');
    const integerPartWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    event.target.value = decimalPart !== undefined ? `${integerPartWithCommas}.${decimalPart}` : integerPartWithCommas;
  }

}
