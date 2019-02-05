import { Component } from '@angular/core';

import { DataTableHttpDataFetchService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-data-binding-usage',
  templateUrl: './server-side-data-binding-usage.component.html'
})
export class ServerSideDataBindingUsageComponent {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: DataTableHttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
