import { Component } from '@angular/core';

import { DropdownDataBindCallback, DropdownHttpResourceService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public onDataBind: DropdownDataBindCallback;

  constructor(private dataFetchService: DropdownHttpResourceService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
