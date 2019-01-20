import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-filter-dropdown-usage',
  templateUrl: './filter-dropdown-usage.component.html'
})
export class FilterDropdownUsageComponent {

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
