import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpRequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body'|'response'|'event';
  params?: HttpParams | {
    [param: string]: string;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
