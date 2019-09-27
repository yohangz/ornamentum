import { HttpRequestOptions } from './http-request-options.model';

/**
 * HTTP resource options model.
 */
export interface ResourceOptions extends HttpRequestOptions {

  /**
   * Request URL.
   */
  url?: string;
}
