import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tax-filling',
  templateUrl: './tax-filling.component.html',
  styleUrls: ['./tax-filling.component.scss']
})
export class TaxFillingComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log();
  }
}
