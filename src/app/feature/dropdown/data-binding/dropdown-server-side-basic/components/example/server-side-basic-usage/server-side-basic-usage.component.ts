import { Component } from '@angular/core';

import { DropdownDataBindCallback, DropdownHttpResourceFactoryService } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-server-side-basic-usage',
  templateUrl: './server-side-basic-usage.component.html'
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DropdownDataBindCallback<ExampleData>;

  constructor(private resourceFactory: DropdownHttpResourceFactoryService) {
    const exampleDataResource = resourceFactory.getResourceProvider<ExampleData>();
    // 2nd argument is optional. It is used to remap the response schema to dropdown data source interface.
    this.onDataBind = exampleDataResource.onDataBind('/api/data', (response: Observable<any>) => {
      return response.pipe(map((source: any) => {
        return {
          options: source.items,
          count: source.count
        };
      }));
    });
  }
}
