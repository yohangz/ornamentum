import { HttpRequestOptions } from './http-request-options.model';

export interface RequestOptions {
  url: string;
  options?: HttpRequestOptions;
}
