import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface Dropdown {
  label: string;
  value: number;
}

@Component({
  selector: 'app-tax-date',
  templateUrl: './tax-date.component.html',
  styleUrls: ['./tax-date.component.scss']
})
export class TaxDateComponent {
  @Input() formGroup!: FormGroup;
  @Output() formGroupChange = new EventEmitter<FormGroup>();
  @Input() submitted: boolean = false;

  monthList$: Observable<Dropdown[]>;
  yearList$: Observable<Dropdown[]>;

  currentDate = new Date();
  monthReadOnly = true;

  constructor() {
    this.monthList$ = this.onGetMonthList();
    this.yearList$ = this.onGetYearList();
  }

  onGetMonthList(): Observable<Dropdown[]> {
    this.monthList$ = of([]);
    if (this.year) {
      this.monthReadOnly = false;
      let months: Date[] = [];
      let maxMonth = this.year === this.currentDate.getFullYear() ? this.currentDate.getMonth() : 11;
      for (let i = 0; i <= maxMonth; i++) {
        const month = new Date(this.year, i, 1);
        months.push(month)
      }

      this.validateMonth(months);

      return of(months.map<Dropdown>(this.mapDateListToDropdown));
    }
    return of([]);
  }

  onGetYearList(): Observable<Dropdown[]> {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - startYear + 1}, (_, i) => startYear + i);
    return of(years.map<Dropdown>(this.mapYearToDropdown));
  }

  onChangeYear(event: any) {
    if (event) {
      this.monthList$ = this.onGetMonthList();
    }
  }

  mapYearToDropdown(year: number): Dropdown {
    return {
      label: year.toString(),
      value: year,
    }
  }

  mapDateListToDropdown(month: Date): Dropdown {
    const monthName = month.toLocaleString('default', {month: 'long'})
    return {
      label: monthName,
      value: month.getMonth(),
    }
  }

  validateMonth(months: Date[]):void {
    if (this.month) {
      if (months.length - 1 < this.month) {
        this.formGroup.controls.month.setValue(null);
      }
    }
  }

  get year() {
    return this.formGroup?.controls.year.value;
  }

  get month() {
    return this.formGroup?.controls.month.value;
  }
}
