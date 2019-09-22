import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-selected-option-usage',
  templateUrl: './selected-option-usage.component.html'
})
export class SelectedOptionUsageComponent {
  public options: ExampleData[];
  public selectedOption: ExampleData;

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
    this.selectedOption = this.options[1];
  }
}
