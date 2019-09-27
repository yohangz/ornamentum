import { HttpRequestOptions } from './http-request-options.model';

/**
 * Request options model.
 */
export interface RequestOptions {

  /**
   * Request URL.
   */
  url: string;

  /**
   * HTTP request options.
   */
  options?: HttpRequestOptions;
}
