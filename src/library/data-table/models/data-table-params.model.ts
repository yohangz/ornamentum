import { SortColumn } from './sort-column.model';
import { FilterColumn } from './filter-column.model';

/**
 * Data table parameters.
 */
export interface DataTableParams {
  /**
   * True if hard reload triggered.
   * Refresh button click state
   */
  hardReload: boolean;

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
   * @type {SortColumn[]}
   */
  sortColumns?: SortColumn[];

  /**
   * Filter columns.
   * @type {FilterColumn[]}
   */
  filterColumns?: FilterColumn[];
}
