import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
import { DataRow } from './data-row.model';

/**
 * Cell bind event arguments.
 */
export interface CellBindEventArgs {
  /**
   * Target column.
   * @type {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target row.
   * @type {DataRow}
   */
  row: DataRow;
}
