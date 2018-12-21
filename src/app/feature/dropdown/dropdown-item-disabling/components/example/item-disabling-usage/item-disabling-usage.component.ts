import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-item-disabling-usage',
  templateUrl: './item-disabling-usage.component.html'
})
export class ItemDisablingUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
  }

  public checkProductAvailability(): ExampleData[] {
    const items = this.dataFetchService.fetchData(20, 10);

    if (items) {
      items.map((value: ExampleData) => {
        if (!value.availability) {
          return !value.availability;
        }
      });
      return items;
    }
  }
}
