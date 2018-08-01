import { Component } from '@angular/core';

import { DropdownSelectMode } from 'ornamentum';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-multi-item-selection-usage',
  templateUrl: './multi-item-selection-usage.component.html'
})
export class MultiItemSelectionUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public items: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.dropDownData;
  }
}
