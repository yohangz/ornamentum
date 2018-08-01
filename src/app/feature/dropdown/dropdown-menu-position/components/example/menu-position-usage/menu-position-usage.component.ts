import { Component } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-menu-position-usage',
  templateUrl: './menu-position-usage.component.html'
})
export class MenuPositionUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  public items: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.getDropDownData();
  }
}
