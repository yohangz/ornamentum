import { NgZone } from '@angular/core';

import { SortOrder } from '../models/data-table-sort-order.enum';

import {
  DataTableParams, DataTableQueryResult, FilterColumn, FilterOption,
  SortColumn
} from '../models/data-table.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

function predicate() {
  var fields = [],
    n_fields = arguments.length,
    field, name, reverse, cmp;

  var default_cmp = function (a, b) {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    },
    getCmpFunc = function (primer, reverse, comparator) {
      var dfc = comparator || default_cmp,
        // closer in scope
        cmp = comparator || default_cmp;
      if (primer) {
        cmp = function (a, b) {
          return dfc(primer(a), primer(b));
        };
      }
      if (reverse) {
        return function (a, b) {
          return -1 * cmp(a, b);
        };
      }
      return cmp;
    };

  // preprocess sorting options
  for (var i = 0; i < n_fields; i++) {
    field = arguments[i];
    if (typeof field === 'string') {
      name = field;
      cmp = default_cmp;
    } else {
      name = field.name;
      cmp = getCmpFunc(field.primer, field.reverse, field.comparator);
    }
    fields.push({
      name: name,
      cmp: cmp
    });
  }

  // final comparison function
  return function (A, B) {
    var a, b, name, result;
    for (var i = 0; i < n_fields; i++) {
      result = 0;
      field = fields[i];
      name = field.name;

      result = field.cmp(A[name], B[name]);
      if (result !== 0) break;
    }
    return result;
  };
}

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
  query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<DataTableQueryResult<T[]>>;

  /**
   * Extract data table filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Promise<any[]>} Filter options array promise.
   */
  extractFilterOptions(filterColumn: DataTableColumnComponent): Promise<any[]>;
}

/**
 * Data table resource manager class
 * @class DataTableResourceManager<T>
 */
export class DataTableResourceManager<T> implements DataTableResource<T> {
  private itemsPromise: Promise<T[]>;
  private resolve: Function;
  private queryTimeout: number;
  private filterTimeout: number;

  constructor(private zone: NgZone) {
    this.itemsPromise = new Promise<T[]>((resolve) => {
      this.resolve = resolve;
    });
  }

  /**
   * Set data table items.
   * @param {T[]} value Items collection.
   */
  public setItems(value: T[]): void {
    this.resolve(value);
  }

  /**
   * Query data table items collection.
   * @param {DataTableParams} params Data table parameters.
   * @param {(item: T, index: number, items: T[]) => boolean} filter Filter function callback reference.
   * @return {Promise<any[]>} Item query resolver.
   */
  public query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<DataTableQueryResult<T[]>> {
    let queryPromiseResolver, queryPromiseReject;
    if (this.queryTimeout) {
      clearTimeout(this.queryTimeout);

      if (queryPromiseReject) {
        queryPromiseReject();
      }
    }

    this.zone.runOutsideAngular(() => {
      this.queryTimeout = setTimeout(() => {
        this.itemsPromise.then((items: T[]) => {
          let itemCount = items.length;

          let result: T[] = [];

          if (filter) {
            result = items.filter(filter);
          } else {
            result = items.slice(); // shallow copy to use for sorting instead of changing the original
          }

          if (params.filterColumns.length) {
            result = items.filter((item) => {
              return params.filterColumns.every((filterColumn: FilterColumn) => {
                if (filterColumn.filterExpression) {
                  return filterColumn.filterExpression(item, filterColumn.field, filterColumn.filterValue);
                }

                if (filterColumn.filterValue === undefined || filterColumn.filterValue === '') {
                  return true;
                }

                const column = filterColumn.field ? item[filterColumn.field] : item[filterColumn.field];
                if (column === undefined) {
                  return true;
                }

                if (Array.isArray(filterColumn.filterValue)) {
                  return filterColumn.filterValue.length === 0 || filterColumn.filterValue.some((option: FilterOption) => {
                    return column === option.key;
                  });
                }

                const value = String(column).toLowerCase();
                const filterValue = String(filterColumn.filterValue).toLowerCase();
                return value.includes(filterValue);
              });
            });
            itemCount = result.length;
          }

          if (params.sortColumns.length) {
            const sortExpressions = params.sortColumns.filter((column: SortColumn) => {
              return column.sortOrder !== SortOrder.NONE;
            }).map((column: SortColumn) => {
              return {
                name: column.field,
                reverse: column.sortOrder === SortOrder.DESC,
                comparator: column.comparator
              };
            });

            result.sort(predicate.apply(this, sortExpressions));
          }

          if (params.offset !== undefined) {
            const offset = (params.offset + 1 > result.length) ? 0 : params.offset;

            if (params.limit === undefined) {
              result = result.slice(offset, result.length);
            } else {
              result = result.slice(offset, offset + params.limit);
            }
          }

          queryPromiseResolver({
            items: result,
            count: itemCount
          });
        });
      });
    });

    return new Promise((resolve, reject) => {
      queryPromiseResolver = resolve;
      queryPromiseReject = reject;
    });
  }

  /**
   * Extract data table filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Promise<any[]>} Filter options array promise.
   */
  public extractFilterOptions(filterColumn: DataTableColumnComponent): Promise<any[]> {
    let filterPromiseResolver, filterPromiseReject;
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);

      if (filterPromiseReject) {
        filterPromiseReject();
      }
    }

    this.zone.runOutsideAngular(() => {
      this.filterTimeout = setTimeout(() => {
        this.itemsPromise.then((items: T[]) => {
          const filteredItems = items.map(filterColumn.filterFieldMapper ? filterColumn.filterFieldMapper
            : (item) => item[filterColumn.filterField || filterColumn.field])
            .reduce<T[]>((accumulator: T[], value: T[]) => {
              return accumulator.concat(value);
            }, [])
            .filter((value, index, self) => {
              return self.indexOf(value) === index;
            });

          filterPromiseResolver(filteredItems);
        });
      });
    });

    return new Promise((resolve, reject) => {
      filterPromiseResolver = resolve;
      filterPromiseReject = reject;
    });
  }
}
