import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
import { DataTableRow } from './data-table-row.model';

/**
 * Cell click event arguments.
 */
export interface DataTableCellClickEventArgs<T> {
  /**
   * Target column.
   * {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target data row.
   * @type {DataTableRow}
   */
  row: DataTableRow<T>;

  /**
   * Mouse event arguments.
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
