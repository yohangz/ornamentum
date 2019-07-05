import { Component } from '@angular/core';

import {
  DataTableDataBindCallback,
  DataTableFilterValueExtractCallback,
  DataTableHttpResourceFactoryService
} from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-dropdown-filtering-usage',
  templateUrl: './server-side-dropdown-filtering-usage.component.html'
})
export class ServerSideDropdownFilteringUsageComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;
  public onFilterValueExtract: DataTableFilterValueExtractCallback;

  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
    this.onFilterValueExtract = exampleDataResource.onFilterValueExtract('/api/data/filter');
  }
}
