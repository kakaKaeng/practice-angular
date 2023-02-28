import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tax-filling',
  templateUrl: './tax-filling.component.html',
  styleUrls: ['./tax-filling.component.scss']
})
export class TaxFillingComponent implements OnInit {
  currentStep = 1;
  formTaxModel: FormGroup
  submitted = false;

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
      this.currentStep = 2;
    }
  }
}
