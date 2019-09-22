import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-selected-options-usage',
  templateUrl: './selected-options-usage.component.html'
})
export class SelectedOptionsUsageComponent {
  public options: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
    this.selectedOptions = this.options.slice(0, 4);
  }
}
