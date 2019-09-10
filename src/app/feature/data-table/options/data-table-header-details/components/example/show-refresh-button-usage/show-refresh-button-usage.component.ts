import { Component } from '@angular/core';

import { DataTableDataBindCallback, DataTableHttpResourceFactoryService } from 'ornamentum';

import { ExampleData } from 'helper-models';


@Component({
  selector: 'app-show-refresh-button-usage',
  templateUrl: './show-refresh-button-usage.component.html'
})
export class ShowRefreshButtonUsageComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
