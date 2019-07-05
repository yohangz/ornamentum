import { Component } from '@angular/core';

import { DropdownDataBindCallback, DropdownHttpResourceFactoryService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-basic-usage',
  templateUrl: './server-side-basic-usage.component.html'
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DropdownDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DropdownHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    this.onDataBind = exampleDataResource.onDataBind('/api/data');
  }
}
