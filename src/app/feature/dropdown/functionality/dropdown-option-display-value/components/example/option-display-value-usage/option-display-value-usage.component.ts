import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-option-display-usage',
  templateUrl: './option-display-value-usage.component.html'
})
export class OptionDisplayValueUsageComponent {
  public options: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
