import { HttpRequestOptions } from './http-request-options.model';

export interface ResourceOptions extends HttpRequestOptions {
  url?: string;
}
