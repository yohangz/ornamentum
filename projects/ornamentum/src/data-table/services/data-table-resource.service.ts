import { Injectable } from '@angular/core';

import { Observable, ReplaySubject, Subscription, of } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

import { orderBy, get } from '../../utility/services/object-utility.class';

import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { DataTableQueryResult } from '../models/data-table-query-result.model';
import { DataTableQueryField } from '../models/data-table-query-field.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';
import { DataTableFilterOption } from '../models/data-table-filter-option.model';
import { DataTableFilterFieldOptions } from '../models/data-table-filter-field-options.model';

/**
 * Data table resource service; Manage data table client side data querying.
 */
@Injectable()
export class DataTableResourceService<T> {
  private itemDataReplayStream: ReplaySubject<T[]>;
  private filterOptionReplayStream: ReplaySubject<DataTableFilterFieldOptions[]>;

  private dataSourceReplaySubscription: Subscription;

  /**
   * Set data source stream to query.
   * @param dataSource Data source stream.
   */
  public setDataSource(dataSource: Observable<T[]>): void {
    this.dispose();

    this.itemDataReplayStream = new ReplaySubject(1);
    this.filterOptionReplayStream = new ReplaySubject(1);
    this.dataSourceReplaySubscription = dataSource.subscribe(this.itemDataReplayStream);
  }

  /**
   * Query items by data table request params.
   * @param params Data table parameters object.
   * @return Query result stream.
   */
  public query(params: DataTableRequestParams): Observable<DataTableQueryResult<T>> {
    return this.itemDataReplayStream.pipe(
      switchMap((items: T[]) => {
        let itemCount = items.length;
        let result: T[] = items.slice();

        if (params.fields.length) {
          const filterFields = params.fields.filter(field => field.filterable);

          if (filterFields.length) {
            const filterOptions = filterFields.filter((field: DataTableQueryField) => {
                return Array.isArray(field.filterValue);
              }).reduce((accOptions: DataTableFilterFieldOptions[], field: DataTableQueryField) => {
                const uniqueOptions = result.map((item: T): DataTableFilterOption => {
                  const value = get(item, field.displayTrackBy);
                  return {
                    key: value,
                    value
                  };
                })
                .filter((value: DataTableFilterOption, index, self: DataTableFilterOption[]) => {
                  return self.findIndex(item => item.key === value.key) === index;
                });

                return [
                  ...accOptions,
                  {
                    id: field.id,
                    options: uniqueOptions
                  }
                ];
              }, []);

            this.filterOptionReplayStream.next(filterOptions);

            result = result.filter(item => {
              return filterFields.every((filterField: DataTableQueryField) => {
                if (filterField.filterExpression) {
                  return filterField.filterExpression(item, filterField.displayTrackBy, filterField.filterValue);
                }

                if (filterField.filterValue === undefined || filterField.filterValue === '') {
                  return true;
                }

                const fieldValue = get(item, filterField.displayTrackBy);
                if (fieldValue === undefined) {
                  return true;
                }

                if (Array.isArray(filterField.filterValue)) {
                  return filterField.filterValue.length === 0 || filterField.filterValue.includes(fieldValue);
                }

                const value = String(fieldValue).toLowerCase();
                const filterValue = String(filterField.filterValue).toLowerCase();
                return value.includes(filterValue);
              });
            });
            itemCount = result.length;
          }

          const sortColumns = params.fields.filter((column: DataTableQueryField) => {
            return column.sortable && column.sortOrder !== '';
          });

          if (sortColumns.length) {
            let orderedSortColumns = sortColumns;
            if (sortColumns.length > 1) {
              orderedSortColumns = sortColumns.concat().sort((a, b) => {
                return a.sortPriority - b.sortPriority;
              });
            }

            const orderParams = orderedSortColumns.reduce((accumulator: any, column: DataTableQueryField) => {
                if (accumulator) {
                  accumulator.fields.push(column.displayTrackBy);
                  accumulator.orders.push(column.sortOrder);
                }

                return accumulator;
              },
              {
                fields: [],
                orders: []
              }
            );

            result = orderBy(result, orderParams.fields, orderParams.orders);
          }
        }

        return of({
          items: this.sliceResults(params.offset, params.limit, result),
          count: itemCount
        });
      })
    );
  }

  /**
   * Extract data table filter options.
   */
  public extractFilterOptions(params: DropdownRequestParams): Observable<DropdownQueryResult<DataTableFilterOption>> {
    return this.filterOptionReplayStream.pipe(
      take(1),
      map((fields: DataTableFilterFieldOptions[]): DropdownQueryResult<DataTableFilterOption> => {
        const field = fields.find((filed: DataTableFilterFieldOptions) => filed.id === 'params.id');
        if (!field) {
          return {
            count: 0,
            options: []
          };
        }

        let result = field.options;
        if (params.filter) {
          const filterValue = String(params.filter).toLowerCase();
          result = result.filter((value: DataTableFilterOption) => {
            return value.value.includes(filterValue);
          });
        }

        return {
          count: result.length,
          options: this.sliceResults(params.offset, params.limit, result)
        };
      })
    );
  }

  /**
   * Dispose client data source streams.
   */
  public dispose(): void {
    if (this.dataSourceReplaySubscription) {
      this.dataSourceReplaySubscription.unsubscribe();
    }

    if (this.itemDataReplayStream) {
      this.itemDataReplayStream.complete();
    }

    if (this.filterOptionReplayStream) {
      this.filterOptionReplayStream.complete();
    }

    this.dataSourceReplaySubscription = null;
    this.itemDataReplayStream = null;
  }

  private sliceResults(offset: number, limit: number, result: any[]): any {
    if (offset !== undefined) {
      const targetOffset = offset + 1 > result.length ? 0 : offset;

      if (limit === undefined) {
        return result.slice(targetOffset, result.length);
      } else {
        return result.slice(targetOffset, targetOffset + limit);
      }
    }
  }
}
