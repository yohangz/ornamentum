import {Component} from '@angular/core';
import {ExampleData} from 'helper-models';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


// import { DataTableHttpResourceFactoryService, DataTableDataBindCallback } from 'ornamentum';
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
  selector: 'app-custom-data-provider',
  templateUrl: './custom-data-provider.component.html'
})
export class CustomDataProviderComponent {

  constructor(public http: HttpClient) {

  }

  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  public onDataBind:() => Observable<CustomDataTableQueryResult<ExampleData>> = (params?): Observable<CustomDataTableQueryResult<ExampleData>> => {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('offset', params.offset);
    httpParams = httpParams.append('limit', params.limit);

    return this.http.get('api/data', {params: httpParams}) as Observable<any>;
        // return this.http.get('https://api.github.com/search/code?q=addClass+user:mozilla&page='+((params.offset+params.limit)/params.limit)+'&per_page='+params.limit, {})
        //   .pipe(
        //     map((res: any) => {
        //
        //       /**
        //        * Items collection
        //        * items: T[];
        //        * Item count
        //        * count: number;
        //        */
        //       debugger
        //       return {
        //         items: res.items,
        //         count: res.total_count
        //       };
        //     })
        //   ) as Observable<any>;
  };

  public onFilterValueExtract:(column: any) => Observable<any[]> = (params?:any):Observable<any[]>=>{
    let httpParams = new HttpParams();
    httpParams = httpParams.append('field', params.field);
    return this.http.get('api/data/filter', {params:httpParams}) as Observable<any>;
  };

}
