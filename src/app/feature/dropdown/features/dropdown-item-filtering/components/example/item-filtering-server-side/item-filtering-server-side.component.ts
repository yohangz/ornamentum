import { Component } from '@angular/core';

import { DropdownDataBindCallback, DropdownHttpResourceService } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-item-filtering-server-side',
  templateUrl: './item-filtering-server-side.component.html'
})
export class ItemFilteringServerSideComponent {
  public onDataBind: DropdownDataBindCallback;

  constructor(private dataFetchService: DropdownHttpResourceService<ExampleData>) {
    this.onDataBind = this.dataFetchService.onDataBind('/api/data');
  }
}
