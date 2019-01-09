import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Header click event arguments
 */
export interface DataTableHeaderClickEventArgs {
  /**
   * Target column
   * @type {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target mouse event
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
