export interface TaxModel {
  type_of_filling: 'ordinary' | 'additional';
  month: number;
  year: number;
  additional_type?: string;
  total_tax: number;
  total_vat: number;
  surcharge?: number;
  penalty?: number;
}
