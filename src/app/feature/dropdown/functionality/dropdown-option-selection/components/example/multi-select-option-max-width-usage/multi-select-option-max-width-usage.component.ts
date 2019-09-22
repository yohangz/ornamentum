import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-multi-select-option-max-width-usage',
  templateUrl: './multi-select-option-max-width-usage.component.html'
})
export class MultiSelectOptionMaxWidthUsageComponent {
  public options: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
    this.selectedOptions = this.options.slice(0, 4);
  }
}
