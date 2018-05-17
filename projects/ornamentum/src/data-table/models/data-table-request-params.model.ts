import { DataTableSortColumn } from './data-table-sort-column.model';
import { DataTableFilterColumn } from './data-table-filter-column.model';

/**
 * Data table parameters.
 */
export interface DataTableRequestParams {
  /**
   * True if re-fetch data load mode is triggered.
   */
  loadData: boolean;

  /**
   * Data offset value.
   * @type {number}
   */
  offset?: number;

  /**
   * Data limit value (page size).
   * @type {number}
   */
  limit?: number;

  /**
   * Sort columns.
   * @type {DataTableSortColumn[]}
   */
  sortColumns?: DataTableSortColumn[];

  /**
   * Filter columns.
   * @type {DataTableFilterColumn[]}
   */
  filterColumns?: DataTableFilterColumn[];
}
