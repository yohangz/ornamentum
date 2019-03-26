import { Component } from '@angular/core';

import { DataTableHttpDataFetchService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-multi-column-sorting',
  templateUrl: './server-side-multi-column-sorting.component.html'
})
export class ServerSideMultiColumnSortingComponent {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: DataTableHttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
