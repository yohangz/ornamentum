import { Component } from '@angular/core';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-disabling-usage',
  templateUrl: './item-disabling-usage.component.html'
})
export class ItemDisablingUsageComponent {
  public items: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.getDropDownData();
  }
}
