import { Component } from '@angular/core';

import { DataTableDataBindCallback, DataTableHttpDataFetchService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-text-box-filtering-usage',
  templateUrl: './server-side-text-box-filtering-usage.component.html'
})
export class ServerSideTextBoxFilteringUsageComponent {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: DataTableHttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
