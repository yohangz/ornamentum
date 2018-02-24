import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataTableParams } from '../models/data-table-params.model';
import { QueryResult } from '../models/query-result.model';
import { FilterColumn } from '../models/filter-column.model';
import { FilterOption } from '../models/filter-option.model';
import { SortColumn } from '../models/sort-column.model';
import { SortOrder } from '../models/sort-order.enum';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';

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
 * Data table resource manager class
 * @class DataTableResource
 */
@Injectable()
export class DataTableResource<T> {
  private itemDataStream = new ReplaySubject<T[]>(1);
  private dataSourceSubscription: Subscription;

  public setDataSource(dataSource: Observable<T[]>): void {
    this.dispose();
    this.dataSourceSubscription = dataSource.subscribe((items: T[]) => {
      this.itemDataStream.next(items);
    });
  }

  /**
   * Query data table items collection.
   * @param {DataTableParams} params Data table parameters.
   * @return {Observable<QueryResult<T>>} Item query resolver.
   */
  public query(params: DataTableParams): Observable<QueryResult<T>> {
    return this.itemDataStream.switchMap((items: T[]) => {
      let itemCount = items.length;
      let result: T[] = items.slice();

      if (params.filterColumns.length) {
        result = items.filter((item) => {
          return params.filterColumns.every((filterColumn: FilterColumn) => {
            if (filterColumn.filterExpression) {
              return filterColumn.filterExpression(item, filterColumn.field, filterColumn.filterValue);
            }

            if (filterColumn.filterValue === undefined || filterColumn.filterValue === '') {
              return true;
            }

            const column = item[filterColumn.field];
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

        if (sortExpressions.length) {
          result.sort(predicate.apply(this, sortExpressions));
        }
      }

      if (params.offset !== undefined) {
        const offset = (params.offset + 1 > result.length) ? 0 : params.offset;

        if (params.limit === undefined) {
          result = result.slice(offset, result.length);
        } else {
          result = result.slice(offset, offset + params.limit);
        }
      }

      return Observable.of({
        items: result,
        count: itemCount
      });
    });
  }

  /**
   * Extract data table filter options.
   * @param {DataTableColumnComponent} filterColumn Data table column component.
   * @return {Observable<FilterOption[]>} Filter options array observable.
   */
  public extractFilterOptions(filterColumn: DataTableColumnComponent): Observable<FilterOption[]> {
    return this.itemDataStream.switchMap((items: T[]) => {
      const filteredItems = items.map((item: T, index: number) => {
        if (filterColumn.filterFieldMapper) {
          return filterColumn.filterFieldMapper(item, index);
        }

        const field = item[filterColumn.filterField || filterColumn.field];
        return {
          key: field,
          value: field
        };
      })
        .filter((value, index, self) => {
          return self.findIndex(item => item.key === value.key) === index;
        });

      return Observable.of(filteredItems);
    });
  }

  public dispose(): void {
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
      this.dataSourceSubscription = null;
    }
  }
}
