import { DataTableSortOrder } from './data-table-sort-order.model';
import { DataTableFilterExpressionCallback } from './data-table-filter-expression-callback.model';

/**
 * Data table query field model.
 */
export interface DataTableQueryField {
  /**
   * Column identifier.
   */
  id: string;

  /**
   * Target column display track by path.
   * This field support object paths expressions 'root[0].nest'.
   */
  displayTrackBy: string;

  /**
   * Target column sorting track by path.
   * This field support object paths expressions 'root[0].nest'.
   */
  sortTrackBy: string;

  /**
   * Target column filter track by path.
   * This field support object paths expressions 'root[0].nest'.
   */
  filterTrackBy: string;

  /**
   * Sortable state.
   */
  sortable: boolean;

  /**
   * Sort order.
   */
  sortOrder: DataTableSortOrder;

  /**
   * Multi column sort priority.
   */
  sortPriority: number;

  /**
   * Filterable state.
   */
  filterable: boolean;

  /**
   * Filter value.
   */
  filterValue: string | string[];

  /**
   * Filter expression.
   */
  filterExpression: DataTableFilterExpressionCallback;
}
