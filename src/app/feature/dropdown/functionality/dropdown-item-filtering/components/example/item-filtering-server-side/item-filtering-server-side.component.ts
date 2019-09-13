import { Component } from '@angular/core';

import { DropdownDataBindCallback, DropdownHttpResourceFactoryService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-item-filtering-server-side',
  templateUrl: './item-filtering-server-side.component.html'
})
export class ItemFilteringServerSideComponent {
  public onDataBind: DropdownDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DropdownHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
