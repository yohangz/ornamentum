import { DataTableFilterOption } from './data-table-filter-option.model';

/**
 * Data table filter field options model
 */
export interface DataTableFilterFieldOptions {
  /**
   * Column identifier.
   */
  id: string;

  /**
   * Field associated filter options.
   */
  options: DataTableFilterOption[];
}
