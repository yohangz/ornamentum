/**
 * Example data store model.
 */
export interface Store {
  storeName: string;
  website: string;
}

/**
 * Example data model.
 */
export interface ExampleData {
  availability: boolean;
  availableStores: Store[];
  id: number;
  retailerType: string;
  retailerCountry: string;
  orderMethodType: string;
  productLine: string;
  productType: string;
  product: string;
  year: number;
  quarter: string;
  revenue: number;
  quantity: number;
  grossMargin: number;
}
