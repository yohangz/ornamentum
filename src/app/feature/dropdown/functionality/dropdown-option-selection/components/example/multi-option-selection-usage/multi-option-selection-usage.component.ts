import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-multi-option-selection-usage',
  templateUrl: './multi-option-selection-usage.component.html'
})
export class MultiOptionSelectionUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
