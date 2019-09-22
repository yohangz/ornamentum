import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-set-first-option-selected-usage',
  templateUrl: './set-first-option-selected-usage.component.html'
})
export class SetFirstOptionSelectedUsageComponent {
  public options: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }
}
