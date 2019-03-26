import { Component } from '@angular/core';

import { DataTableHttpDataFetchService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-single-column-sorting',
  templateUrl: './server-side-single-column-sorting.component.html'
})
export class ServerSideSingleColumnSortingComponent {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: DataTableHttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
