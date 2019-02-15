import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpRequestOptions {
  url?: string;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'events';
  params?: HttpParams | {
    [param: string]: string;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
