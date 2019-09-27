import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Filter event arguments model.
 */
export interface DataTableFilterEventArgs {
  /**
   * Target column.
   */
  column: DataTableColumnComponent;

  /**
   * Filter value.
   */
  filter: any;
}
