import { DataTableSortOrder } from './data-table-sort-order.model';
import { DataTableFilterExpressionCallback } from './data-table-filter-expression-callback.model';

/**
 * Data table query field
 */
export interface DataTableQueryField {
  /**
   * Target column filed name
   */
  field: string;

  /**
   * Sortable state
   */
  sortable: boolean;

  /**
   * Filterable state
   */
  filterable: boolean;

  /**
   * Sort order
   */
  sortOrder: DataTableSortOrder;

  /**
   * Filter value
   */
  filterValue: string | string[] | any;

  /**
   * Filter expression
   */
  filterExpression: DataTableFilterExpressionCallback;
}
