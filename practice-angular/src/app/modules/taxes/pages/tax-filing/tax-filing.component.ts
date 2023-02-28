import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaxModel } from '../../shared/models/tax.models';

@Component({
  selector: 'app-tax-filing',
  templateUrl: './tax-filing.component.html',
  styleUrls: ['./tax-filing.component.scss']
})
export class TaxFilingComponent implements OnInit {
  currentStep = 1;
  formTaxModel: FormGroup
  submitted = false;
  formTaxModelData?: TaxModel

  constructor(private fb: FormBuilder) {
    this.formTaxModel = this.initFormTaxModel();
  }

  ngOnInit(): void {
    console.log();
  }

  initFormTaxModel(): FormGroup {
    return this.fb.group({
      type_of_filling: ['ordinary', []],
      month: [null, [Validators.required]],
      year: [null, [Validators.required]],
      additional_type: [null, []],
      total_tax: [null, [Validators.required]],
      total_vat: [null, [Validators.required]],
      surcharge: [null, []],
      penalty: [null, []],
    });
  }

  onSubmit() {
    this.submitted = true
    if (this.formTaxModel.valid) {
      const rawData = this.formTaxModel.getRawValue();
      rawData.total_tax = rawData.total_tax.replace(/[^0-9.]/g, '').replace(/,/g, '')
      rawData.total_vat = rawData.total_vat.replace(/[^0-9.]/g, '').replace(/,/g, '')
      rawData.surcharge = rawData.surcharge ? rawData.surcharge.replace(/[^0-9.]/g, '') : null;
      rawData.penalty = rawData.penalty ? rawData.penalty.replace(/[^0-9.]/g, '') : null;

      rawData.total_amount_vat = parseFloat(rawData.total_tax)
      if (rawData.surcharge) {
        rawData.total_amount_vat += parseFloat(rawData.surcharge)
      }
      if (rawData.penalty) {
        rawData.total_amount_vat += parseFloat(rawData.penalty)
      }

      rawData.total_amount_vat = rawData.total_amount_vat.toString();
      this.formTaxModelData = rawData;
      this.currentStep = 2;
    }
  }
}
