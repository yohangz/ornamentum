import { DataRow } from './data-row.model';

/**
 * Double click event arguments.
 */
export interface DoubleClickEventArgs {
  /**
   * Target data row.
   */
  row: DataRow;

  /**
   * Target mouse event arguments.
   */
  event: MouseEvent;
}
