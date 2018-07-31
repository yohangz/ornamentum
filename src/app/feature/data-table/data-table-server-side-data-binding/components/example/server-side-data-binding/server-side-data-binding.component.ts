import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public dataSource: Observable<ExampleDataModel[]>;

  constructor(private tableDataFetchService: TableDataFetchService) {
    const data: ExampleDataModel[] = this.tableDataFetchService.getTableData();
    this.dataSource = of(data);
  }
}
