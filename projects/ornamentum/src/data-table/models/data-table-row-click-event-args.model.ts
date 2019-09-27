import { DataTableRow } from './data-table-row.model';

/**
 * Row click event arguments model.
 */
export interface DataTableRowClickEventArgs<T> {
  /**
   * Target data row.
   */
  row: DataTableRow<T>;

  /**
   * Target mouse event.
   */
  event: MouseEvent;
}
