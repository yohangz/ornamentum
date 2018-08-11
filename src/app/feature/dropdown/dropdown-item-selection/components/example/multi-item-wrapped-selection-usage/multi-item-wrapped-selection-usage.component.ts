import { Component } from '@angular/core';


import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-multi-item-wrapped-selection-usage',
  templateUrl: './multi-item-wrapped-selection-usage.component.html'
})
export class MultiItemWrappedSelectionUsageComponent {

  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();

    this.selectedOptions = this.items.slice(10, 15);
  }
}
