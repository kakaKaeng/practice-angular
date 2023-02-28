export interface TaxModel {
  type_of_filling: 'ordinary' | 'additional';
  month: number;
  year: number;
  additional_type?: string;
  total_tax: string;
  total_vat: string;
  surcharge?: string;
  penalty?: string;
  total_amount_vat?: string;
}
