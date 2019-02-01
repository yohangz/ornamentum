import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { DataTableQueryResult } from '../models/data-table-query-result.model';
import { DataTableFilterColumn } from '../models/data-table-filter-column.model';
import { DataTableSortColumn } from '../models/data-table-sort-column.model';
import { DataTableDataBindCallback } from '../models/data-table-data-bind-callback.model';

/**
 * HTTP data fetch service.
 */
@Injectable()
export class HttpDataFetchService<T> {
  constructor(private http: HttpClient) {}

  /**
   * HTTP data bind event handler.
   */
  public onDataBind(resourcePath: string, responseMapper?: <Q>(response: Q) => DataTableQueryResult<T[]>, requestOptions?: any): DataTableDataBindCallback {
    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
      let queryParams = new HttpParams();

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.append('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.append('offset', String(params.offset));
        }

        params.filterColumns.forEach((dataTableColumnComponent: DataTableFilterColumn) => {
          if (dataTableColumnComponent.filterValue === undefined || dataTableColumnComponent.filterValue === '') {
            return;
          }

          if (typeof dataTableColumnComponent.filterValue === 'string') {
            const filter = Array.isArray(dataTableColumnComponent.filterValue) ? dataTableColumnComponent.filterValue.join(',') :
              dataTableColumnComponent.filterValue;
            queryParams = queryParams.append(dataTableColumnComponent.field, filter);
            return;
          }
        });

        params.sortColumns.filter((column: DataTableSortColumn) => {
          return column.sortOrder !== '';
        }).forEach((dataTableColumnComponent: DataTableSortColumn, index: number) => {
          const filterValue = queryParams.get(dataTableColumnComponent.field);

          if (filterValue) {
            queryParams = queryParams.append(dataTableColumnComponent.field, `${filterValue}|${dataTableColumnComponent.sortOrder}|${index}`);
          } else {
            queryParams = queryParams.append(dataTableColumnComponent.field, `|${dataTableColumnComponent.sortOrder}|${index}`);
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
