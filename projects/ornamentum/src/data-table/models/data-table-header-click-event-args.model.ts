import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Header click event arguments model.
 */
export interface DataTableHeaderClickEventArgs {
  /**
   * Target column.
   */
  column: DataTableColumnComponent;

  /**
   * Target mouse event.
   */
  event: MouseEvent;
}
