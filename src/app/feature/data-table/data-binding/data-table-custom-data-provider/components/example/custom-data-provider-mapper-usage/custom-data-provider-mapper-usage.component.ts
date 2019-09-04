import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableQueryResult, DataTableRequestParams } from 'ornamentum';

@Component({
  selector: 'app-custom-data-provider-mapper-usage',
  templateUrl: './custom-data-provider-mapper-usage.component.html',
  styles: ['.highlight { font-weight: bold; color: #4fc1e9}', '.link { color: #ffce54}']
})
export class CustomDataProviderMapperUsageComponent {

  constructor(public http: HttpClient) {}

  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  public onDataBind = (params: DataTableRequestParams): Observable<DataTableQueryResult<any>> => {
    const page = (params.offset + params.limit) / params.limit;
    const perPage = params.limit;

    let httpParams = new HttpParams();
    httpParams = httpParams
      .append('q', 'univers')
      .append('page', '' + page)
      .append('per_page', '' + perPage);

    return this.http.get('https://api.github.com/search/repositories', { params: httpParams })
      .pipe(
        map((res: any) => {
          /**
           * Items collection
           * items: T[];
           * Item count
           * count: number;
           */
          console.log(res.items);
          return {
            items: res.items,
            count: res.total_count
          };
        })
      ) as Observable<any>;
  }
}
