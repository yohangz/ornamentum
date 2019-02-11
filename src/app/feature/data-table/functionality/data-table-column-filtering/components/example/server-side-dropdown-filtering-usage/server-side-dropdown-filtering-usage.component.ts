import { Component } from '@angular/core';

import { DataTableDataBindCallback, DataTableFilterValueExtractCallback, DataTableHttpDataFetchService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-dropdown-filtering-usage',
  templateUrl: './server-side-dropdown-filtering-usage.component.html'
})
export class ServerSideDropdownFilteringUsageComponent {
  public onDataBind: DataTableDataBindCallback;
  public onFilterValueExtract: DataTableFilterValueExtractCallback;

  constructor(private dataFetchService: DataTableHttpDataFetchService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
    this.onFilterValueExtract = this.dataFetchService.onFilterValueExtract('/api/data/filter');
  }
}
