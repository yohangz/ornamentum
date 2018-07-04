import { Component } from '@angular/core';

import { DropdownRequestParams, DropdownQueryResult } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { data } from './on-data-bind-usage.data';

@Component({
  selector: 'app-on-data-bind-usage',
  templateUrl: './on-data-bind-usage.component.html'
})
export class OnDataBindUsageComponent {

  constructor() {
    this.onDataBind = this.onDataBind.bind(this);
  }

  public onDataBind(params: DropdownRequestParams): Observable<DropdownQueryResult<any>> {
    // Here params defines the Dropdown data requesting parameters. When sending request to the backend need to send these data.

    return of({
      count: 10,
      data: data,
      limit: 50,
      offset: 0
    }).pipe(map((response) => {
      return {
        count: response.count,
        items: response.data
      };
    }));
  }
}
