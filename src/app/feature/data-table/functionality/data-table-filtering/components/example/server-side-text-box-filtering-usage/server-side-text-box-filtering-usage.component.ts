import { Component } from '@angular/core';

import {
  DataTableDataBindCallback,
  DataTableHttpResourceFactoryService
} from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-text-box-filtering-usage',
  templateUrl: './server-side-text-box-filtering-usage.component.html'
})
export class ServerSideTextBoxFilteringUsageComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
