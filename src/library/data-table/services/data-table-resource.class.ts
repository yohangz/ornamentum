import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

import { DataTableParams } from '../models/data-table-params.model';
import { QueryResult } from '../models/query-result.model';

/**
 * Data table resource manager interface.
 * @interface DataTableResource<T>
 */
export interface DataTableResource<T> {
  /**
   * Set data table items.
   * @param {T[]} value Items collection.
   */
  setItems(value: T[]): void;

  /**
   * Query data table items collection.
   * @param {DataTableParams} params Data table parameters.
   * @param {(item: T, index: number, items: T[]) => boolean} filter Filter function callback reference.
   * @return {Promise<any[]>} Item query resolver.
   */
  query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<QueryResult<T>>;

  /**
   * Extract data table filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Promise<any[]>} Filter options array promise.
   */
  extractFilterOptions(filterColumn: DataTableColumnComponent): Promise<any[]>;
}
