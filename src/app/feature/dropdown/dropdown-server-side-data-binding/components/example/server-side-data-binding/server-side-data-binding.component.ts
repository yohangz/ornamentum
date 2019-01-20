import { Component } from '@angular/core';

import { DropdownQueryResult, DropdownRequestParams } from 'ornamentum';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExampleData } from '../../../../../../shared/models';
import { ResourceData } from '../../../../../../shared/models/resource-data.model';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  constructor(private dataFetchService: DataFetchService) {
    this.onDataBind = this.onDataBind.bind(this);
  }

  public onDataBind(params: DropdownRequestParams): Observable<DropdownQueryResult<ExampleData>> {
    return this.dataFetchService.fetchDataOnBindForDropdown(params).pipe(
      map((response: ResourceData<ExampleData[]>) => {
        return {
          count: response.count,
          items: response.data
        };
      })
    );
  }
}
