import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tax-input-detail',
  templateUrl: './tax-input-detail.component.html',
  styleUrls: ['./tax-input-detail.component.scss']
})
export class TaxInputDetailComponent  {
  @Input() formTaxModel!: FormGroup
  @Output() formTaxModelChange = new EventEmitter<FormGroup>();

  mockTypeList = [
    {
      label: 'On-Time',
      value: 'on_time'
    }
  ]

  constructor() { }

}
