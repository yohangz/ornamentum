import { DataTableSortOrder } from './data-table-sort-order.enum';

/**
 * Sort column.
 */
export interface DataTableSortColumn {
  /**
   * Target column filed name.
   * @type {string}
   */
  field: string;

  /**
   * Sort order.
   * @type {DataTableSortOrder}
   */
  sortOrder: DataTableSortOrder;
}
