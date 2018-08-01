import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public dataSource: Observable<DataTableExampleDataModel[]>;

  constructor(private dataFetchService: DataFetchService) {
    const data: DataTableExampleDataModel[] = this.dataFetchService.fetchData();
    this.dataSource = of(data);
  }
}
