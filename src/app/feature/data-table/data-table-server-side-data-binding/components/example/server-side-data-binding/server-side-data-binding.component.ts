import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableQueryResult, DataTableRequestParams } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.onDataBind = this.onDataBind.bind(this);
  }

  public onDataBind(params: DataTableRequestParams): Observable<DataTableQueryResult<ExampleData>> {
    return this.dataFetchService.fetchDataOnBindForDataTable(params).pipe(map((response) => {
      return {
        count: response.count,
        items: response.data
      };
    }));
  }
}
