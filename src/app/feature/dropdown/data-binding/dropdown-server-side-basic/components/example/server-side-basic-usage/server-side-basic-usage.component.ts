import { Component } from '@angular/core';

import { DropdownDataBindCallback, DropdownHttpResourceService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-basic-usage',
  templateUrl: './server-side-basic-usage.component.html'
})
export class ServerSideBasicUsageComponent {
  public onDataBind: DropdownDataBindCallback;

  constructor(private dataFetchService: DropdownHttpResourceService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
