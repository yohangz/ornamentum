import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableQueryResult, DataTableRequestParams } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';
import { ResourceData } from '../../../../../../shared/models/resource-data.model';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {

  constructor(private dataFetchService: DataFetchService) {
    this.onDataBind = this.onDataBind.bind(this);
  }

  public onDataBind(params: DataTableRequestParams): Observable<DataTableQueryResult<ExampleData>> {
    return this.dataFetchService.fetchDataOnBindForDataTable(params).pipe(map((response: ResourceData<ExampleData[]>) => {
      return {
        count: response.count,
        items: response.data
      };
    }));
  }
}
