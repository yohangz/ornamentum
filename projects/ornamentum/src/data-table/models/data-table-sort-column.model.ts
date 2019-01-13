import { DataTableSortOrder } from './data-table-sort-order.model';

/**
 * Sort column
 */
export interface DataTableSortColumn {
  /**
   * Target column filed name
   */
  field: string;

  /**
   * Sort order
   */
  sortOrder: DataTableSortOrder;
}
