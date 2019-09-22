import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-show-option-select-checkbox-usage',
  templateUrl: './show-option-select-checkbox-usage.component.html'
})
export class ShowOptionSelectCheckboxUsageComponent {
  public options: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
