import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestOptions } from '../models/http-request-options.model';
import { RequestOptions } from '../models/request-options.model';

/**
 * Request parameter mapper service.
 */
@Injectable()
export class RequestParamMapperService {
  /**
   * Map HTTP query parameters by request options.
   * @param requestOptions Request options object reference.
   */
  public mapQueryParams(requestOptions: HttpRequestOptions): HttpParams {
    if (requestOptions && requestOptions.params) {
      if (requestOptions.params instanceof HttpParams) {
        return requestOptions.params;
      } else {
        let queryParams = new HttpParams();
        for (const key in requestOptions.params) {
          if (requestOptions.params.hasOwnProperty(key)) {
            queryParams = queryParams.set(key, requestOptions.params[key]);
          }
        }

        return queryParams;
      }
    } else {
      return new HttpParams();
    }
  }

  /**
   * Map request options by http request data.
   * @param options Request options object reference.
   */
  public mapRequestOptions(options: string|HttpRequestOptions): RequestOptions {
    const requestOptions: RequestOptions = {
      url: '',
      options: {}
    };

    if (typeof options === 'object') {
      requestOptions.options = options;
      requestOptions.url = options.url;
    } else {
      requestOptions.url = options;
    }

    return requestOptions;
  }
}
