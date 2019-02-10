import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableQueryField } from '../../data-table/models/data-table-query-field.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';
import { DataTableFilterValueExtractCallback } from '../../data-table/models/data-table-filter-value-extract-callback.model';
import { DataTableFilterOption } from '../../data-table/models/data-table-filter-option.model';
import { DataTableColumnComponent } from '../../data-table/components/data-table-column/data-table-column.component';

/**
 * Data table HTTP data fetch service.
 */
@Injectable()
export class DataTableHttpDataFetchService<T> {
  constructor(private http: HttpClient) {}

  /**
   * Get data bind event handler.
   * @param resourcePath Request resource path to extract table data.
   * @param responseMapper Custom response mapper. Use when response data does not match expected schema.
   * @param requestOptions Advanced request options.
   * @return Data table bind event handler.
   */
  public onDataBind(resourcePath: string, responseMapper?: <Q>(response: Q) => DataTableQueryResult<T[]>,
                    requestOptions?: any): DataTableDataBindCallback {
    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
      let queryParams = new HttpParams();

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.set('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.set('offset', String(params.offset));
        }

        params.fields.forEach((column: DataTableQueryField, index: number) => {
          let query = '';

          if (column.filterable) {
            if (typeof column.filterValue === 'string') {
              if (column.filterValue !== '') {
                query += column.filterValue;
              }
            } else if (Array.isArray(column.filterValue) && column.filterValue.length) {
              query += column.filterValue.join(',');
            }
          }

          if (column.sortable && column.sortOrder !== '') {
            query += `|${column.sortOrder}|${index}`;
          }

          if (query) {
            queryParams = queryParams.set(column.field, query);
          }
        });

        const resource = this.http.get<any>(resourcePath, { params: queryParams, ...requestOptions }) as Observable<any>;

        if (responseMapper) {
          return resource.pipe(map(responseMapper));
        }

        return resource;
      }
    };
  }

  /**
   * Get filter value extract event handler.
   * @param resourcePath Request resource path to extract column filter options data.
   * @param responseMapper Custom response mapper. Use when response data does not match expected schema.
   * @param requestOptions Advanced request options.
   * @return Data table filter options event handler.
   */
  public onFilterValueExtract(resourcePath: string, responseMapper?: <Q>(response: Q) => DataTableFilterOption[],
                              requestOptions?: any): DataTableFilterValueExtractCallback {
    return (column: DataTableColumnComponent): Observable<DataTableFilterOption[]> => {
      let queryParams = new HttpParams();
      const filterField = column.filterField || column.field;
      queryParams = queryParams.set('field', filterField);

      const resource = this.http.get<any>(resourcePath, { params: queryParams, ...requestOptions }) as Observable<any>;

      if (responseMapper) {
        return resource.pipe(map(responseMapper));
      }

      return resource;
    };
  }
}
