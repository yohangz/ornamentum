import { DataTableRow } from './data-table-row.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Cell bind event arguments.
 */
export interface DataTableCellBindEventArgs<T> {
  /**
   * Target column.
   * @type {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target row.
   * @type {DataTableRow}
   */
  row: DataTableRow<T>;
}
