import { Component } from '@angular/core';

import { DropdownExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-display-tracked-by-usage',
  templateUrl: './display-tracked-by-usage.component.html'
})
export class DisplayTrackedByUsageComponent {
  public items: DropdownExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.dropDownData;
  }
}
