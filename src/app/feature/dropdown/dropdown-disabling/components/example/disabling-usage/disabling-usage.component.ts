import { Component } from '@angular/core';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-disabling-usage',
  templateUrl: './disabling-usage.component.html'
})
export class DisablingUsageComponent {
  public items: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.dropDownData;
  }
}
