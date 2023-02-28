export interface TaxModels {
  type_of_filling: 'ordinary' | 'additional';
  vat_date: Date;
  additional_type?: string;
  total_tax: number;
  total_vat: number;
  surcharge: number;
  penalty: number;
}
