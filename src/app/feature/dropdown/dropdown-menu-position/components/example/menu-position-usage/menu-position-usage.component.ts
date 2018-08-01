import { Component } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-menu-position-usage',
  templateUrl: './menu-position-usage.component.html'
})
export class MenuPositionUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
