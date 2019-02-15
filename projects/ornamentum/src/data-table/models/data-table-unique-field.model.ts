import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Data table unique field.
 */
export interface DataTableUniqueField {
  /**
   * Field name.
   */
  field: string;

  /**
   * Field associated column reference.
   */
  column: DataTableColumnComponent;
}
