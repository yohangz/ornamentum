import { SortOrder } from './sort-order.enum';

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
}
