import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DropdownDataBindCallback } from '../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';

/**
 * Dropdown HTTP data fetch service.
 */
@Injectable()
export class DropdownHttpResourceService<T> {
  constructor(private http: HttpClient) {
  }

  /**
   * Get data bind event handler.
   * @param resourcePath Request resource path to extract dropdown data.
   * @param responseMapper Custom response mapper. Use when response data does not match expected schema.
   * @param requestOptions Advanced request options.
   * @return Dropdown bind event handler.
   */
  public onDataBind(resourcePath: string, responseMapper?: <Q>(response: Q) => DropdownQueryResult<T[]>,
                    requestOptions?: any): DropdownDataBindCallback {
    return (params?: DropdownRequestParams): Observable<DropdownQueryResult<T[]>> => {
      let queryParams = new HttpParams();

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.set('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.set('offset', String(params.offset));
        }

        if (params.filter && params.filter.value) {
          queryParams = queryParams.set('filter', `${params.filter.key}|${params.filter.value}`);
        }

        const resource = this.http.get<any>(resourcePath, { params: queryParams, ...requestOptions }) as Observable<any>;

        if (responseMapper) {
          return resource.pipe(map(responseMapper));
        }

        return resource;
      }
    };
  }
}
