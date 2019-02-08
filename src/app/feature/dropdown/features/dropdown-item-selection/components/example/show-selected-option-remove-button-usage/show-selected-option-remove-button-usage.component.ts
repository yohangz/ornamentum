import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-show-selected-option-remove-button-usage',
  templateUrl: './show-selected-option-remove-button-usage.component.html'
})
export class ShowSelectedOptionRemoveButtonUsageComponent {
  public items: ExampleData[];
  public selectedOptions: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }
}
