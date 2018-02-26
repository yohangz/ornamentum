import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Filter event arguments.
 */
export interface DataTableFilterEventArgs {
  /**
   * Target column.
   * @type {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Filter value.
   * @type {any}
   */
  filter: any;
}
