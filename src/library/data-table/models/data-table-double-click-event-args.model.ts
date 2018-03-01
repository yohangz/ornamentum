import { DataTableRow } from './data-table-row.model';

/**
 * Double click event arguments.
 */
export interface DataTableDoubleClickEventArgs<T> {
  /**
   * Target data row.
   */
  row: DataTableRow<T>;

  /**
   * Target mouse event arguments.
   */
  event: MouseEvent;
}
