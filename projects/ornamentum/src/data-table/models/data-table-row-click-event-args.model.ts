import { DataTableRow } from './data-table-row.model';

/**
 * Row click event arguments.
 */
export interface DataTableRowClickEventArgs<T> {
  /**
   * Target data row.
   * @type {DataTableRow}
   */
  row: DataTableRow<T>;

  /**
   * Target mouse event.
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
