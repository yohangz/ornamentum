import {Component} from '@angular/core';
import {ExampleData} from 'helper-models';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
  public onDataBind: () => Observable<CustomDataTableQueryResult<ExampleData>>;
  public onFilterValueExtract: (column: any) => Observable<any[]>;

  constructor(public http: HttpClient) {
    /**
     * custom data provider need to return a function which is return an Observable out put
     * as long as your data return as observable you can use any data source
     * example : Firebase Realtime Database or Cloud Firestore
     */
    this.onDataBind = (params?): Observable<CustomDataTableQueryResult<ExampleData>> => {
      console.log('onDataBind> params >',params);
      return this.http.get('http://localhost:8080/api/data?offset='+ params.offset+'&limit='+params.limit, {}) as Observable<any>;
      // if the response and request is different from from above you can change request and response according to your requirement.
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

    // const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onFilterValueExtract = (params?:any):Observable<any[]>=>{

      return this.http.get('http://localhost:8080/api/data/filter?field='+params.field, {}) as Observable<any>;
    }

  }

}
