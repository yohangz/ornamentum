import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DropdownRequestParams, DropdownQueryResult } from 'ornamentum';

@Component({
  selector: 'app-custom-data-provider-mapper-usage',
  templateUrl: './custom-data-provider-mapper-usage.component.html'
})
export class CustomDataProviderMapperUsageComponent {

  constructor(public http: HttpClient) {}

  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  public onDataBind = (params: DropdownRequestParams): Observable<DropdownQueryResult<any>> => {
    const page = (params.offset + params.limit) / params.limit;
    const perPage = params.limit;

    let httpParams = new HttpParams();
    httpParams = httpParams
      .append('page', '' + page)
      .append('perPage', '' + perPage);

    return this.http.get('https://api.github.com/repos/yohangz/ornamentum/contributors', { params: httpParams })
      .pipe(
        map((res: any) => {
          /**
           * Options collection
           * options: T[];
           * Option count
           * count: number;
           */
          return {
            options: res,
            count: res.length
          };
        })
      ) as Observable<any>;
  }
}
