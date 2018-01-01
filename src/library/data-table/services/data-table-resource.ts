import { SortOrder } from '../models/data-table-sort-order.enum';
import {DataTableParams, FilterOption} from '../models/data-table.model';
import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Data table resource service
 * @class DataTableResource<T>
 */
export class DataTableResource<T> {
  private itemsPromise: Promise<T[]>;
  private resolve: Function;

  constructor() {
    this.itemsPromise = new Promise<T[]>((resolve) => {
      this.resolve = resolve;
    });
  }

  /**
   * Set items.
   * @param {T[]} value
   */
  public set items(value: T[]) {
    this.resolve(value);
  }

  /**
   * Query item collection.
   * @param {DataTableParams} params Data table parameters.
   * @param {(item: T, index: number, items: T[]) => boolean} filter Filter function callback reference.
   * @return {Promise<any[]>} Item query resolver.
   */
  public query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<T[]> {
    let queryPromiseResolver;

    this.itemsPromise.then((items: T[]) => {
      let result: T[] = [];

      if (filter) {
        result = items.filter(filter);
      } else {
        result = items.slice(); // shallow copy to use for sorting instead of changing the original
      }

      if (params.filterColumns.length) {
        result = items.filter((item) => {
          return params.filterColumns.every((filterColumn: DataTableColumnComponent) => {
            if (filterColumn.filterExpression) {
              return filterColumn.filterExpression(item, filterColumn);
            }

            if (filterColumn.filter === undefined || filterColumn.filter === '') {
              return true;
            }

            const column = filterColumn.filterField ? item[filterColumn.filterField] : item[filterColumn.field];
            if (column === undefined) {
              return true;
            }

            if (Array.isArray(filterColumn.filter)) {
              return filterColumn.filter.length === 0 || filterColumn.filter.some((option: FilterOption) => {
                return column === option.key;
              });
            }

            const value = String(column).toLowerCase();
            const filter = String(filterColumn.filter).toLowerCase();
            return value.includes(filter);
          });
        });
      }

      if (params.sortColumn) {
        if (params.sortColumn.sortOrder === SortOrder.ASC || params.sortColumn.sortOrder === SortOrder.DESC) {
          if (params.sortColumn.sortExpression) {
            result.sort(params.sortColumn.sortExpression);
          } else {
            result.sort((a, b) => {
              if (typeof a[params.sortColumn.field] === 'string') {
                return a[params.sortColumn.field].localeCompare(b[params.sortColumn.field]);
              } else {
                return a[params.sortColumn.field] - b[params.sortColumn.field];
              }
            });
          }
        }

        if (params.sortColumn.sortOrder === SortOrder.DESC) {
          result.reverse();
        }
      }

      if (params.offset !== undefined) {
        if (params.limit === undefined) {
          result = result.slice(params.offset, result.length);
        } else {
          result = result.slice(params.offset, params.offset + params.limit);
        }
      }

      setTimeout(() => queryPromiseResolver(result));
    });

    return new Promise((resolve) => {
      queryPromiseResolver = resolve;
    });
  }

  /**
   * Extract filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Promise<any[]>} Filter options array promise.
   */
  public extractFilterOptions(filterColumn: DataTableColumnComponent): Promise<any[]> {
    let filterPromiseResolver;

    this.itemsPromise.then((items: T[]) => {
      const filteredItems = items.map(filterColumn.filterFieldMapper ? filterColumn.filterFieldMapper : (item) => item[filterColumn.filterField || filterColumn.field])
        .reduce<T[]>((accumulator: T[], value: T[]) => {
          return accumulator.concat(value);
        }, [])
        .filter((value, index, self) => {
          return self.indexOf(value) === index;
        });

      setTimeout(() => filterPromiseResolver(filteredItems));
    });

    return new Promise((resolve) => {
      filterPromiseResolver = resolve;
    });
  }

  /**
   * Get item count.
   * @return {Promise<number>} Item count promise.
   */
  public count(): Promise<number> {
    let countPromiseResolver;

    this.itemsPromise.then((items: T[]) => {
      setTimeout(() => countPromiseResolver(items.length));
    });

    return new Promise((resolve) => {
      countPromiseResolver = resolve;
    });
  }
}
