import { Component } from '@angular/core';

import { HttpDataFetchService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: HttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
