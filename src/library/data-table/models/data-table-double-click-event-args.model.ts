import { DataTableRow } from './data-table-row.model';

/**
 * Double click event arguments.
 */
export interface DataTableDoubleClickEventArgs {
  /**
   * Target data row.
   */
  row: DataTableRow;

  /**
   * Target mouse event arguments.
   */
  event: MouseEvent;
}
