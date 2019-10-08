import { Component } from '@angular/core';

import {
  DataTableHttpResourceFactoryService,
  DataTableDataBindCallback,
  DataTableFilterValueExtractCallback,
  DataTableFilterOption
} from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-basic-usage',
  templateUrl: './server-side-basic-usage.component.html'
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;
  public onFilterValueExtract: DataTableFilterValueExtractCallback<DataTableFilterOption>;

  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
    this.onFilterValueExtract = exampleDataResource.onFilterValueExtract('/api/data/filter/options');
  }
}
