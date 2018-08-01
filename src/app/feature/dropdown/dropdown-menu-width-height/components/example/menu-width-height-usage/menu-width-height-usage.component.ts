import { Component } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-menu-width-height-usage',
  templateUrl: './menu-width-height-usage.component.html'
})
export class MenuWidthHeightUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
