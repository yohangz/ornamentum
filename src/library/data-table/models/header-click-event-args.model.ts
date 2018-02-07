import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Header click event arguments.
 */
export interface HeaderClickEventArgs {
  /**
   * Target column.
   * @type {DataTableColumnComponent}
   */
  column: DataTableColumnComponent;

  /**
   * Target mouse event.
   * @type {MouseEvent}
   */
  event: MouseEvent;
}
