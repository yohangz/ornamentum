import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';
import { DataTableRow } from './data-table-row.model';

/**
 * Cell bind event arguments.
 */
export interface DataTableCellBindEventArgs {
  /**
   * Target column.
   * @type {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target row.
   * @type {DataTableRow}
   */
  row: DataTableRow;
}
