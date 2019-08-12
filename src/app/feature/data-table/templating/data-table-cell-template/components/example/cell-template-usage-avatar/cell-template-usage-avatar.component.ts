import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";

import { DataTableRequestParams } from 'ornamentum';

export interface CustomDataTableQueryResult<T> {
  /**
   * Items collection
   * @template Generic item type
   */
  items: T[];

  /**
   * Item count
   */
  count: number;
}

@Component({
  selector: 'app-cell-template-usage-avatar',
  templateUrl: './cell-template-usage-avatar.component.html',
  styles: ['.highlight { color: lightblue; font-weight: bold;}']
})
export class CellTemplateUsageAvatarComponent {


  constructor(public http: HttpClient) {

  }

  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  public onDataBind = (params: DataTableRequestParams): Observable<CustomDataTableQueryResult<any>> => {

    const page = (params.offset + params.limit) / params.limit;
    const per_page = params.limit;
    debugger;
    let httpParams = new HttpParams();
    httpParams = httpParams.append('page', '' + page);
    httpParams = httpParams.append('per_page', '' + per_page);

    return this.http.get('https://api.github.com/repos/yohangz/ornamentum/contributors', { params: httpParams })
      .pipe(
        map((res: any) => {

          /**
           * Items collection
           * items: T[];
           * Item count
           * count: number;
           */
          return {
            items: res,
            count: res.length
          };
        })
      ) as Observable<any>;
  };

}
