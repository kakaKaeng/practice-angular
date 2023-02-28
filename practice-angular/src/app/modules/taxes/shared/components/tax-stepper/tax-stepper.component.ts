import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tax-stepper',
  templateUrl: './tax-stepper.component.html',
  styleUrls: ['./tax-stepper.component.scss']
})
export class TaxStepperComponent {
  @Input() currentStep: number = 1

  constructor() {
  }

}
