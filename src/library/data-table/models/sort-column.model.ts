import { SortOrder } from './sort-order.enum';
import { SortComparatorCallback } from './sort-comparator-callback.model';

/**
 * Sort column.
 */
export interface SortColumn {
  /**
   * Target column filed name.
   * @type {string}
   */
  field: string;

  /**
   * Sort order.
   * @type {SortOrder}
   */
  sortOrder: SortOrder;

  /**
   * Sort comparator callback function reference.
   * @type {SortComparatorCallback}
   */
  comparator: SortComparatorCallback;
}
