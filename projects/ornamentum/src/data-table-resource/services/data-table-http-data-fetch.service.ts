import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableQueryField } from '../../data-table/models/data-table-query-field.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';
import { DataTableFilterValueExtractCallback } from '../../data-table/models/data-table-filter-value-extract-callback.model';
import { HttpRequestOptions } from '../../resource-utility/models/http-request-options.model';
import { ResourceOptions } from '../../resource-utility/models/resource-options.model';

import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DataTableFilterParams } from '../../data-table/models/data-table-filter-params.model';

/**
 * Data table HTTP data fetch service.
 */
export class DataTableHttpDataFetchService<T> {
  constructor(private http: HttpClient, public requestParamMapperService: RequestParamMapperService) {}

  /**
   * Get data bind event handler.
   * @param options Request options or resource path.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Data table bind event handler.
   */
  public onDataBind(
    options: string|ResourceOptions,
    mapper?: <Q>(response: Observable<Q>) => Observable<DataTableQueryResult<T>>,
  ): DataTableDataBindCallback<T> {
    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T>> => {
      const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
      let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.set('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.set('offset', String(params.offset));
        }

        params.fields.forEach((column: DataTableQueryField) => {
          let filterValue = '';
          let sortValue = '';

          if (column.filterable) {
            if (typeof column.filterValue === 'string') {
              if (column.filterValue !== '') {
                filterValue = column.filterValue;
              }
            } else if (Array.isArray(column.filterValue) && column.filterValue.length) {
              filterValue = column.filterValue.join(',');
            }
          }

          if (column.sortable && column.sortOrder !== '') {
            sortValue = `|${column.sortOrder}|${column.sortPriority}`;
          }

          if (filterValue && sortValue) {
            if (column.filterTrackBy !== column.sortTrackBy) {
              queryParams = queryParams.set(column.filterTrackBy, filterValue);
              queryParams = queryParams.set(column.sortTrackBy, sortValue);
            } else {
              queryParams = queryParams.set(column.filterTrackBy, filterValue + sortValue);
            }
          } else if (filterValue) {
            queryParams = queryParams.set(column.filterTrackBy, filterValue);
          } else if (sortValue) {
            queryParams = queryParams.set(column.sortTrackBy, sortValue);
          }
        });

        requestOptions.options.params = queryParams;

        const resource = this.http.get<any>(requestOptions.url, requestOptions.options as any) as Observable<any>;

        if (mapper) {
          return mapper(resource);
        }

        return resource;
      }
    };
  }

  /**
   * Get filter value extract event handler.
   * @param options Request options or resource path.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Data table filter options event handler.
   */
  public onFilterValueExtract<R>(
    options: string|HttpRequestOptions,
    mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<R>>,
  ): DataTableFilterValueExtractCallback<R> {
    return (params: DataTableFilterParams): Observable<DropdownQueryResult<R>> => {
      const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
      let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);

      if (params.offset !== undefined && params.limit !== undefined) {
        queryParams = queryParams.set('offset', String(params.offset));
        queryParams = queryParams.set('limit', String(params.limit));
      }

      if (params.filter) {
        queryParams = queryParams.set('field', params.displayTrackBy);
        queryParams = queryParams.set('filter', params.filter);
      }

      const resource = this.http.get<any>(requestOptions.url, { params: queryParams, ...requestOptions }) as Observable<any>;

      if (mapper) {
        return mapper(resource);
      }

      return resource;
    };
  }
}
