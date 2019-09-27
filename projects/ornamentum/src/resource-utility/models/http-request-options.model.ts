import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * HTTP request options model.
 */
export interface HttpRequestOptions {

  /**
   * HTTP header parameters.
   */
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };

  /**
   * Observe mode.
   */
  observe?: 'body'|'response'|'event';

  /**
   * HTTP request params.
   */
  params?: HttpParams | {
    [param: string]: string;
  };

  /**
   * Report progress state.
   */
  reportProgress?: boolean;

  /**
   * Response type.
   */
  responseType?: 'json';

  /**
   * Has credentials state.
   */
  withCredentials?: boolean;
}
