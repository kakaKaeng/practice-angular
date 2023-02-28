import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tax-filling',
  templateUrl: './tax-filling.component.html',
  styleUrls: ['./tax-filling.component.scss']
})
export class TaxFillingComponent implements OnInit {
  currentStep = 1;
  formTaxModel: FormGroup

  constructor(private fb: FormBuilder) {
    this.formTaxModel = this.initFormTaxModel();
  }

  ngOnInit(): void {
    console.log();
  }

  initFormTaxModel(): FormGroup {
    return this.fb.group({
      type_of_filling: ['ordinary', []],
      month: [null, []],
      year: [null, []],
      additional_type: [null, []],
      total_tax: [null, []],
      total_vat: [null, []],
      surcharge: [null, []],
      penalty: [null, []],
    });
  }

  onSubmit() {
    console.log(this.formTaxModel.value);
  }
}
