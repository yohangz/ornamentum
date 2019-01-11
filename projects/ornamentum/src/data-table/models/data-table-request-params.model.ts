import { DataTableSortColumn } from './data-table-sort-column.model';
import { DataTableFilterColumn } from './data-table-filter-column.model';

/**
 * Data table parameters
 */
export interface DataTableRequestParams {
  /**
   * True if re-fetch data load mode is triggered
   */
  loadData: boolean;

  /**
   * Data offset value
   */
  offset?: number;

  /**
   * Data limit value (page size)
   */
  limit?: number;

  /**
   * Sort columns
   */
  sortColumns?: DataTableSortColumn[];

  /**
   * Filter columns
   */
  filterColumns?: DataTableFilterColumn[];
}
