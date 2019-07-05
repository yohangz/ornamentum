import { Component } from '@angular/core';

import { DataTableHttpResourceFactoryService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-multi-column-sorting',
  templateUrl: './server-side-multi-column-sorting.component.html'
})
export class ServerSideMultiColumnSortingComponent {
  public onDataBind: DataTableDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DataTableHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
