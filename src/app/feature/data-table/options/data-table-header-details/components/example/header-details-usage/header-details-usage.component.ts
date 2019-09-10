import { Component } from '@angular/core';

import { DataTableDataBindCallback, DataTableHttpResourceFactoryService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-header-details-usage',
  templateUrl: './header-details-usage.component.html'
})
export class HeaderDetailsUsageComponent {

  public onDataBind: DataTableDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
