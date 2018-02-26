import { DataTableRow } from './data-table-row.model';

/**
 * Row click event arguments.
 */
export interface DataTableRowClickEventArgs {
  /**
   * Target data row.
   * @type {DataTableRow}
   */
  row: DataTableRow;

  /**
   * Target mouse event.
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
