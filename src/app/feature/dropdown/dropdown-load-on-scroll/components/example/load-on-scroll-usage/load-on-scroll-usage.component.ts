import { Component } from '@angular/core';

import { DropdownRequestParams, DropdownQueryResult } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-load-on-scroll-usage',
  templateUrl: './load-on-scroll-usage.component.html'
})
export class LoadOnScrollUsageComponent {
  public items: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.dropDownData;
    this.onDataBind = this.onDataBind.bind(this);
  }

  public onDataBind(params: DropdownRequestParams): Observable<DropdownQueryResult<any>> {
    // Here params defines the Dropdown data requesting parameters. When sending request to the backend need to send these data.

    return of({
      count: 10,
      data: this.items,
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
