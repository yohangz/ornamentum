import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';

import orderBy from 'lodash.orderBy';
import get from 'lodash.get';

import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { DataTableQueryResult } from '../models/data-table-query-result.model';
import { FilterColumn } from '../models/filter-column.model';
import { FilterOption } from '../models/filter-option.model';
import { SortColumn } from '../models/sort-column.model';
import { SortOrder } from '../models/sort-order.enum';

import { DataTableColumnComponent } from '../components/data-table-column/data-table-column.component';

/**
 * Data table resource manager class
 * @class DataTableResourceService
 */
@Injectable()
export class DataTableResourceService<T> {
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
   * @param {DataTableRequestParams} params Data table parameters.
   * @return {Observable<DataTableQueryResult<T>>} Item query resolver.
   */
  public query(params: DataTableRequestParams): Observable<DataTableQueryResult<T>> {
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

            const fieldValue = get(item, filterColumn.field);
            if (fieldValue === undefined) {
              return true;
            }

            if (Array.isArray(filterColumn.filterValue)) {
              return filterColumn.filterValue.length === 0 || filterColumn.filterValue.some((option: FilterOption) => {
                return fieldValue === option.key;
              });
            }

            const value = String(fieldValue).toLowerCase();
            const filterValue = String(filterColumn.filterValue).toLowerCase();
            return value.includes(filterValue);
          });
        });
        itemCount = result.length;
      }

      if (params.sortColumns.length) {
        const sortColumns = params.sortColumns.filter((column: SortColumn) => {
          return column.sortOrder !== SortOrder.NONE;
        });

        if (sortColumns.length) {
          const orderData = sortColumns.reduce((accumulator: any, column: SortColumn) => {
            if (accumulator) {
              accumulator.fields.push(column.field);
              accumulator.orders.push(column.sortOrder);
            }

            return accumulator;
          }, {
            fields: [],
            orders: []
          });

          result = orderBy(result, orderData.fields, orderData.orders);
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

        const filterField = filterColumn.filterField || filterColumn.field;
        const filterValue = get(item, filterField);
        return {
          key: filterValue,
          value: filterValue
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
