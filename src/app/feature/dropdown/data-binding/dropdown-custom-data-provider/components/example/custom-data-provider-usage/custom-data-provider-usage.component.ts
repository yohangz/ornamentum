import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DropdownQueryResult } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-custom-data-provider-usage',
  templateUrl: './custom-data-provider-usage.component.html'
})
export class CustomDataProviderUsageComponent {

  constructor(public http: HttpClient) {}

  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  public onDataBind: () => Observable<DropdownQueryResult<ExampleData>> = (params?)
    : Observable<DropdownQueryResult<ExampleData>> => {
    let httpParams = new HttpParams();

    httpParams = httpParams
      .append('offset', params.offset)
      .append('limit', params.limit);

    return this.http.get('api/data', { params: httpParams }) as Observable<any>;
  };
}
