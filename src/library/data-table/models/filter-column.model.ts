import { FilterExpressionCallback } from './filter-expression-callback.model';

/**
 * Filter column
 */
export interface FilterColumn {
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
   * @type {FilterExpressionCallback}
   */
  filterExpression: FilterExpressionCallback;

  /**
   * Show dropdown filter state.
   * @type {boolean}
   */
  showDropdownFilter: boolean;
}
