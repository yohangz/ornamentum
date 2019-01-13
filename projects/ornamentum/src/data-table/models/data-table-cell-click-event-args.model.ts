import { DataTableRow } from './data-table-row.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Cell click event arguments
 */
export interface DataTableCellClickEventArgs<T> {
  /**
   * Target column
   */
  column: DataTableColumnComponent;

  /**
   * Target data row
   */
  row: DataTableRow<T>;

  /**
   * Mouse event arguments
   */
  event: MouseEvent;
}
