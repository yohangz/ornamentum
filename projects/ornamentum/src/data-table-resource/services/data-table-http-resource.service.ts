import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableQueryField } from '../../data-table/models/data-table-query-field.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';

/**
 * Data table HTTP data fetch service.
 */
@Injectable()
export class DataTableHttpDataFetchService<T> {
  constructor(private http: HttpClient) {}

  /**
   * HTTP data bind event handler.
   */
  public onDataBind(resourcePath: string, responseMapper?: <Q>(response: Q) => DataTableQueryResult<T[]>,
                    requestOptions?: any): DataTableDataBindCallback {
    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
      let queryParams = new HttpParams();

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.append('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.append('offset', String(params.offset));
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
            queryParams = queryParams.append(column.field, query);
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
}
