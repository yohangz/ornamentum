import { DataTableQueryField } from '../../data-table/models/data-table-query-field.model';

/**
 * Data table socket data fetch model.
 */
export interface DataTableSocketDataQuery {
  /**
   * Offset value.
   */
  offset: number;

  /**
   * Limit value.
   */
  limit: number;

  /**
   * Query field collection.
   */
  fields: DataTableQueryField[];
}
