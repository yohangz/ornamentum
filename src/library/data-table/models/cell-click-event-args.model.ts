import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
import { DataRow } from './data-row.model';

/**
 * Cell click event arguments.
 */
export interface CellClickEventArgs {
  /**
   * Target column.
   * {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target data row.
   * @type {DataRow}
   */
  row: DataRow;

  /**
   * Mouse event arguments.
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
