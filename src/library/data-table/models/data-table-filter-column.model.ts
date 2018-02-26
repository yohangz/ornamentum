import { DataTableFilterExpressionCallback } from './data-table-filter-expression-callback.model';

/**
 * Filter column
 */
export interface DataTableFilterColumn {
  /**
   * Filter field property name.
   * @type {string}
   */
  field: string;

  /**
   * Filter value.
   * @type {any}
   */
  filterValue: any;

  /**
   * Filter expression.
   * @type {DataTableFilterExpressionCallback}
   */
  filterExpression: DataTableFilterExpressionCallback;

  /**
   * Show dropdown filter state.
   * @type {boolean}
   */
  showDropdownFilter: boolean;
}
