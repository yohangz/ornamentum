import { DataRow } from './data-row.model';

/**
 * Row click event arguments.
 */
export interface RowClickEventArgs {
  /**
   * Target data row.
   * @type {DataRow}
   */
  row: DataRow;

  /**
   * Target mouse event.
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
