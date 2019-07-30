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
   * Sort order
   */
  sortOrder: DataTableSortOrder;

  /**
   * Multi column sort priority.
   */
  sortPriority: number;

  /**
   * Filterable state
   */
  filterable: boolean;

  /**
   * Filter value
   */
  filterValue: string | string[] | any;

  /**
   * Filter expression
   */
  filterExpression: DataTableFilterExpressionCallback;
}
