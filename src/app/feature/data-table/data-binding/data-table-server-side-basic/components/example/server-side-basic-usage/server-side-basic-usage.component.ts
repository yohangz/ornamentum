import { Component } from '@angular/core';

import { DataTableHttpDataFetchService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-basic-usage',
  templateUrl: './server-side-basic-usage.component.html'
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: DataTableHttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
