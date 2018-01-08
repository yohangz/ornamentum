import { NgZone } from '@angular/core';

import { SortOrder } from '../models/data-table-sort-order.enum';

import {
  DataTableParams, DataTableQueryResult, FilterColumn, FilterOption,
  SortColumn
} from '../models/data-table.model';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

import { Observable } from 'rxjs/Observable';

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
   * Query data table items collection.
   * @param {DataTableParams} params Data table parameters.
   * @param {(item: T, index: number, items: T[]) => boolean} filter Filter function callback reference.
   */
  query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Observable<DataTableQueryResult<T[]>>;

  /**
   * Extract data table filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Observable<any[]>} Filter options stream.
   */
  extractFilterOptions(filterColumn: DataTableColumnComponent):  Observable<any[]>;
}

/**
 * Data table resource manager class
 * @class DataTableResourceManager<T>
 */
export class DataTableResourceManager<T> implements DataTableResource<T> {
  private items: T[];

  constructor(private zone: NgZone, items: T[]) {
    this.items = items;
  }

  /**
   * Query data table items collection.
   * @param {DataTableParams} params Data table parameters.
   * @param {(item: T, index: number, items: T[]) => boolean} filter Filter function callback reference.
   * @return {Promise<any[]>} Item query resolver.
   */
  public query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Observable<DataTableQueryResult<T[]>> {
    return Observable.create((observer) => {
      const task = setTimeout(() => {
        try {
          let itemCount = this.items.length;

          let result: T[] = [];

          if (filter) {
            result = this.items.filter(filter);
          } else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
          }

          if (params.filterColumns.length) {
            result = this.items.filter((item) => {
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

          observer.next({
            items: result,
            count: itemCount
          });

          observer.complete();
        } catch (error) {
          observer.error(error);
        }
      });

      return () => {
        clearTimeout(task);
      }
    });
  }

  /**
   * Extract data table filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Promise<any[]>} Filter options array promise.
   */
  public extractFilterOptions(filterColumn: DataTableColumnComponent): Observable<any[]> {
    return Observable.create((observer) => {
      const task = setTimeout(() => {
        try {
          const filteredItems = this.items.map(filterColumn.filterFieldMapper ? filterColumn.filterFieldMapper
            : (item) => item[filterColumn.filterField || filterColumn.field])
            .reduce<T[]>((accumulator: T[], value: T[]) => {
              return accumulator.concat(value);
            }, [])
            .filter((value, index, self) => {
              return self.indexOf(value) === index;
            });

          observer.next(filteredItems);
        } catch (error) {
          observer.error(error);
        }

        observer.complete();
      });

      return () => {
        clearTimeout(task);
      }
    });
  }
}
