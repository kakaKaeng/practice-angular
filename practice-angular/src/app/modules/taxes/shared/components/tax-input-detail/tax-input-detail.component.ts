import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-tax-input-detail',
  templateUrl: './tax-input-detail.component.html',
  styleUrls: ['./tax-input-detail.component.scss']
})
export class TaxInputDetailComponent {
  @Input() formTaxModel!: FormGroup
  @Output() formTaxModelChange = new EventEmitter<FormGroup>();
  @Input() submitted: boolean = false;

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

  ordinary() {
    this.formTaxModel.controls.additional_type.setValue(null)
    this.formTaxModel.controls.penalty.setValue(null)
  }

  additional() {
    this.formTaxModel.controls.additional_type.setValue('on_time')
    this.formTaxModel.controls.penalty.setValue('200')
  }

  onGetSurcharge() {
    if (this.formTaxModel.controls.type_of_filling.value === 'additional') {
      this.formTaxModel.controls.surcharge.setValue((+this.formTaxModel.controls.total_tax.value * 0.1).toString());
    }
  }

  onGetTotalAmountVat(): string {
    const total_tax = +this.formTaxModel.controls.total_tax.value || 0
    const surcharge = +this.formTaxModel.controls.surcharge.value || 0
    const penalty = +this.formTaxModel.controls.penalty.value || 0

    return (total_tax + surcharge + penalty).toString();
  }
}
