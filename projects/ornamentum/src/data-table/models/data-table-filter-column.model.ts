import { DataTableFilterExpressionCallback } from './data-table-filter-expression-callback.model';

/**
 * Filter column
 */
export interface DataTableFilterColumn {
  /**
   * Filter field property name
   */
  field: string;

  /**
   * Filter value
   */
  filterValue: any;

  /**
   * Filter expression
   */
  filterExpression: DataTableFilterExpressionCallback;

  /**
   * Show dropdown filter state
   */
  showDropdownFilter: boolean;
}
