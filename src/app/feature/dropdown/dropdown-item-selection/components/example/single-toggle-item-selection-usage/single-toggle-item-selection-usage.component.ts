import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-single-toggle-item-selection-usage',
  templateUrl: './single-toggle-item-selection-usage.component.html'
})
export class SingleToggleItemSelectionUsageComponent {

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
