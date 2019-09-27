import { DataTableQueryField } from './data-table-query-field.model';

/**
 * Data table parameters model.
 */
export interface DataTableRequestParams {
  /**
   * True if re-fetch data load mode is triggered.
   */
  loadData: boolean;

  /**
   * Data offset value.
   */
  offset?: number;

  /**
   * Data limit value (page size).
   */
  limit?: number;

  /**
   * Sort columns.
   */
  fields?: DataTableQueryField[];
}
